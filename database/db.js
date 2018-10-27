const Sequelize = require("sequelize");
require("dotenv").config({path:"/tank0/Projects/VisitorApplication/server/.env"});

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: process.env.DIALECT,
	logging: false,
	freezeTableName: true,
	operatorsAliases: false,
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
		return;
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err);
		return;
	});

module.exports = sequelize;
