const capitalizeFirstLetter = require("./");

test("should return string with a capital first letter", () => {
	const firstName = "nicolau";

	const functionResult = capitalizeFirstLetter(firstName);

	const desiredResult = "Nicolau";

	expect(functionResult).toBe(desiredResult);
});

test("should return undefined if string is undefined", () => {
	const firstName = undefined;

	const functionResult = capitalizeFirstLetter(firstName);

	const result = undefined;

	expect(functionResult).toBe(result);
});
