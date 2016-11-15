/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const len = s.length,
        cache = {};
    for (let i = 0; i < len; i++) {
        if (!cache[s[i]] && !~s.indexOf(s[i], i + 1)) {
            return i;
        } else {
            cache[s[i]] = true;
        }
    }
    return -1;
};