const capitalizeFirstLetter = require("../../services/capitalize-first-letter");
const { validationResult } = require("express-validator");

const firstLetterController = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { firstName, lastName } = req.body;
	const modifiedfirstName = capitalizeFirstLetter(firstName);
	res.json({ firstName: modifiedfirstName, lastName });
};

module.exports = firstLetterController;
