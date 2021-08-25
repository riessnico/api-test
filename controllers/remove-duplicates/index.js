const removeDuplicates = require("../../services/remove-duplicates");
const { validationResult } = require("express-validator");

const removeDuplicatesController = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { array } = req.body;
	newArray = removeDuplicates(array);

	res.json({ array: newArray });
};

module.exports = removeDuplicatesController;
