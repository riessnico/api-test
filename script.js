const express = require("express");

const app = express();

const sumController = require("./controllers/sum/");
const removeDuplicatesController = require("./controllers/remove-duplicates/");
const firstLetterController = require("./controllers/capitalize-first-letter/");

const schemaSumArray = require("./validators/sum");
const schemaRemoveDuplicate = require("./validators/remove-duplicates");
const schemaFirstLetter = require("./validators/capitalize-first-letter");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post(
	"/api/capitalize-first-letter",
	schemaFirstLetter,
	firstLetterController
);

app.post("/api/sum", schemaSumArray, sumController);

app.post(
	"/api/remove-duplicates",
	schemaRemoveDuplicate,
	removeDuplicatesController
);

app.listen(3000, () => {
	console.log("listening on 3000");
});
