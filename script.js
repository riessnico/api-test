const express = require("express");

const app = express();

const sumController = require("./controllers/sum/");
const removeDuplicatesController = require("./controllers/remove-duplicates/");

const schemaSumArray = require("./validators/sum");
const schemaRemoveDuplicate = require("./validators/remove-duplicates");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/sum", schemaSumArray, sumController);

app.post(
	"/api/remove-duplicates",
	schemaRemoveDuplicate,
	removeDuplicatesController
);

app.listen(3000, () => {
	console.log("listening on 3000");
});
