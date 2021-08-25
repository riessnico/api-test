const { body } = require("express-validator");

const schemaFirstLetter = [
	body("firstName")
		.isString()
		.withMessage("Please enter a valid string")
		.exists()
		.withMessage("Please enter a valid input")
		.custom((value) => {
			if (value === "") {
				throw new Error("Please provide a non-empty string");
			}
			if (value.charAt(0) === value.charAt(0).toUpperCase()) {
				throw new Error("Please enter a lowercase starting letter");
			}

			if (/\d/.test(value)) {
				throw new Error("Please provide an only letters string");
			}
			return true;
		})
		.trim(),
	body("lastName")
		.isString()
		.withMessage("Please enter a valid string")
		.exists()
		.withMessage("Please enter a valid input")
		.custom((value) => {
			if (value === "") {
				throw new Error("Please provide a non-empty string");
			}
			if (/\d/.test(value)) {
				throw new Error("Please provide an only letters string");
			}
			return true;
		})
		.trim(),
];

module.exports = schemaFirstLetter;
