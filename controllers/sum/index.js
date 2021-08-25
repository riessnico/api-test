const sumArray = require("../../services/sum");
const { validationResult } = require("express-validator");

const sumController = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { array } = req.body;
	const response = sumArray(array);
	res.json({ response });
	//return response?
};

module.exports = sumController;
