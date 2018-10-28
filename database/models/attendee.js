const Sequelize = require("sequelize");
const db = require("../db");
const { dropIfExists } = require("../utils/drop");

const Attendee = db.define("attendee", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	img: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	toMeet: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	reason: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	outTime: {
		type: Sequelize.DATE,
		allowNull: true,
	},
	inTime: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	},
});

dropIfExists(Attendee);

module.exports = Attendee;
