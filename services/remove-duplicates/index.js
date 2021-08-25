function removeDuplicates(ar) {
	const arRemovedDuplicates = Array.from(new Set(ar));
	return arRemovedDuplicates;
}

module.exports = removeDuplicates;
