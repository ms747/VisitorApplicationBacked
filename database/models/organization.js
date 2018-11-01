const Sequelize = require("sequelize");
const db = require("../db");
const utils = require("../utils/drop");

const Organization = db.define(
	"organizations",
	{
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{ timestamps: false }
);

utils.dropIfExists(Organization);

module.exports = Organization;
