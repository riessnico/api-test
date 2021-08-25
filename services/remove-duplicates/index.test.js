const removeDuplicates = require(".");

test("should return array without duplicates", () => {
	const array = [1, 2, 3, 4, 2, 4, 5, 8];

	const functionResult = removeDuplicates(array);

	desiredResult = [1, 2, 3, 4, 5, 8];

	expect(functionResult).toEqual(desiredResult);
});

test("should return array without duplicates", () => {
	const array = [1, 2, 3, 4, 2, 4, 5, 8];

	const functionResult = removeDuplicates(array);

	result = [1, 2, 3, 4, 5, 8, 4, 5];

	expect(functionResult).not.toEqual(result);
});
