const { body } = require("express-validator");

const schemaSumArray = [
	body("array")
		.exists()
		.withMessage("Missing array")
		.isArray()
		.withMessage("Must be a valid input array")
		.custom((value) => {
			if (value.length < 2) {
				throw new Error("Please enter at least two numbers");
			}
			value.forEach((element) => {
				if (typeof element === "string") {
					throw new Error("Please enter only numbers");
				}
			});
			if (!value.every(Number.isSafeInteger)) {
				throw new Error("Please pick valid numbers");
			}
			if (!value.every(Number.isFinite)) {
				throw new Error("Please pick smaller numbers");
			}
			return true;
		}),
];

module.exports = schemaSumArray;
