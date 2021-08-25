const { body } = require("express-validator");

const schemaRemoveDuplicate = [
	body("array")
		.exists()
		.withMessage("Please enter a valid array")
		.notEmpty()
		.withMessage("Please enter an non empty array"),
];

module.exports = schemaRemoveDuplicate;
