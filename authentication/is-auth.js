const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  console.log(authHeader);
	if (!authHeader) {
		const err = new Error("No Auth Header");
		return res.status(401).json({ error: err.message });
	}
	const token = authHeader.split(" ")[1];
	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		if (verified) {
			res.json({ loggedIn: true }).status(200);
		}
	} catch (e) {
		const err = new Error("Internal JWT Error");
		return res.status(500).json({ error: err.message });
	}
};
