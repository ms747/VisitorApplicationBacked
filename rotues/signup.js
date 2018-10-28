const router = require("express").Router();
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../database/models/user");

router.post("/login", async (req, res) => {
	const foundUser = await User.findOne({ where: { email: req.body.email } });
	if (foundUser) {
		const correctPassword = bcrypt.compareSync(req.body.password, foundUser.dataValues.password);
		if(correctPassword){
			const userObj = {id:foundUser.dataValues.id,email:foundUser.dataValues.email}
			const jwtToken = jwt.sign(userObj,process.env.JWT_SECRET)
			res.json({token:jwtToken}).status(200);
		}
		else{
			return res.status(500).json({ error: "Email & Password Do not match" });
		}
	} else {
		return res.status(500).json({ error: "User not Found" });
	}
});

router.post(
	"/signup",
	[
		check("name")
			.not()
			.isEmpty()
			.withMessage("Name cannot be empty."),
		check("email")
			.isEmail()
			.withMessage("Entered Email is not valid."),
		check("password")
			.isLength({ min: 5 })
			.withMessage("Password should be minimum 5 characters long"),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(500).json({ errors: errors.array() });
		}
		try {
			const hashedPassword = bcrypt.hashSync(req.body.password, 12);
			const newUser = await User.create({ name: req.body.name, email: req.body.email, password: hashedPassword });
			return res.status(201).json({ message: "User created" });
		} catch (e) {
			return res.status(500).json({ errors: e });
		}
	}
);

module.exports = router;
