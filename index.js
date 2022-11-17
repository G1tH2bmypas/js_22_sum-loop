function sum(n) {
	let result = 0;
	let i = 1;
	while (i <= n) {
		result += i++;
	}
	return result;
}

module.exports = sum;
