const Sequelize = require("sequelize");
const db = require("../db");
const { dropIfExists } = require("../utils/drop");

const User = db.define("Users", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

dropIfExists(User);

module.exports = User;
