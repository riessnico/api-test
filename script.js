const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const sumArray = (ar) => {
	const sum = ar.reduce(reducer, 0);
	if (sum) {
		return sum;
	}
};

app.post("/api/sum", (req, res) => {
	const { array } = req.body;
	const response = sumArray(array);
	res.json({ response });
});

app.listen(3000, () => {
	console.log("listening on 3000");
});
