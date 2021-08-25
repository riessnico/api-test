const sumArray = require(".");

test("should return the correct sum", () => {
	const array = [1, 2, 3];

	const functionResult = sumArray(array);

	desiredResult = 6;

	expect(functionResult).toBe(desiredResult);
});

test("should return the incorrect sum", () => {
	const array = [1, 2, 3];

	const functionResult = sumArray(array);

	result = 5;

	expect(functionResult).not.toBe(result);
});
