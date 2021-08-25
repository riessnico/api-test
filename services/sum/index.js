const reducer = (accumulator, currentValue) => accumulator + currentValue;

const sumArray = (ar) => {
	const sum = ar.reduce(reducer, 0);
	if (sum) {
		return sum;
	}
};

module.exports = sumArray;
