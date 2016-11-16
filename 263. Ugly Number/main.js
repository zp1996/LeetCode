/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) return false;
  function judge(n) {
		if (n === 1) return true;
		if (n % 2 === 0) {
			return judge(n / 2);
		} else if (n % 3 === 0) {
			return judge(n / 3);
		} else if (n % 5 === 0) {
			return judge(n / 5);
		}
		return false;
	}
	return judge(num);
};