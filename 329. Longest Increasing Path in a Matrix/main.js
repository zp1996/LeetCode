/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
	const cache = {},
		row = matrix.length,
		col = matrix[0] && matrix[0].length;
	var res = 0;
	if (!col) return res;
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			const count = cache[`${i}$${j}`] || getValue(i, j);
			res = Math.max(res, count);
		}
	}
	return res;
	function getValue(r, c) {
		const prop = `${r}$${c}`;
		if (cache[prop]) return cache[prop];
		const val = matrix[r][c],
			around = [1, 1, 1, 1];
		if (r - 1 >= 0 && val < matrix[r - 1][c]) {
			around[0] += getValue(r - 1, c);
		}
		if (r + 1 < row && val < matrix[r + 1][c]) {
			around[1] += getValue(r + 1, c);
		}
		if (c - 1 >= 0 && val < matrix[r][c - 1]) {
			around[2] += getValue(r, c - 1);
		}
		if (c + 1 < col && val < matrix[r][c + 1]) {
			around[3] += getValue(r, c + 1);
		}
		return (cache[prop] = Math.max.apply(null, around));
	}	   
};