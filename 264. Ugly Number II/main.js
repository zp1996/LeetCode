/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const res = [1];
  var	i = 0, j = 0, k = 0;
  while (res.length < n) {
  	const x = res[i] * 2,
  		y = res[j] * 3,
  		z = res[k] * 5,
  		val = Math.min(x, y, z);
  	res.push(val);
  	if (val === x) i++;
  	if (val === y) j++; 
  	if (val === z) k++;
  }
  return res.pop();
};