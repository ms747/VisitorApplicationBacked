const router = require("express").Router();
const multer = require("multer");

const Attendee = require("../database/models/attendee");
const { multerConfig } = require("../configs/multer");

const storage = multerConfig;
const upload = multer({ storage: storage }).single("img");

router.get("/attendee", async (req, res) => {
	try {
		const attendees = await Attendee.findAll({ where: { outTime: null } });
		res.json(attendees).status(200);
	} catch (e) {
		res.json(e).status(400);
	}
});

router.post("/attendee", async (req, res) => {
	upload(req, res, function(err) {
		if (err) {
			res.send(err).status(400);
		} else {
			Attendee.create({
				name: req.body.name,
				toMeet: req.body.toMeet,
				reason: req.body.reason,
				img: req.file.filename,
			}).then(a => {
				res.json(a).status(200);
			});
		}
	});
});

module.exports = router;