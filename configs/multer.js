const multer = require("multer");
const path = require("path");
const fs = require("fs");

if (!fs.existsSync("./uploads")) {
	console.log("Upload folder doesn't exist");
	fs.mkdirSync("./uploads");
	console.log("Uploads directory created");
} else {
	console.log("Uploads exists");
}

const multerConfig = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
	},
});

module.exports = { multerConfig };
