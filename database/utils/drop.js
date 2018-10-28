exports.dropIfExists = function(modelName) {
	if (process.argv[2] === "--drop") {
		modelName.sync({ force: true }).then(() => {
			console.log("Table Dropped And Created");
			return;
		});
	} else {
		modelName.sync().then(() => {
			console.log(modelName.getTableName() +" Table Created");
			return;
		});
	}
};
