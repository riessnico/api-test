const express = require("express");

const app = express();

const sumArray = require("./services/sum");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/sum", (req, res) => {
	const { array } = req.body;
	const response = sumArray(array);
	res.json({ response });
});

app.listen(3000, () => {
	console.log("listening on 3000");
});
