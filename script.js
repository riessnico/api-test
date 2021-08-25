const express = require("express");

const app = express();

const sumController = require("./controllers/sum/");

const schemaSumArray = require("./validators/sum");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/sum", schemaSumArray, sumController);

app.listen(3000, () => {
	console.log("listening on 3000");
});
