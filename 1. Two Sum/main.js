/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = {}, 
        len = nums.length;
    nums.forEach((val,i) => {
        cache[val] 
            ? (cache[val].push(i)) 
            : (cache[val] = [i]);
    });
    for (let i = 0; i < len - 1; i++) {
        const value = target - nums[i];
        if (cache[value] !== void 0) {
            if (value === nums[i] && cache[value].length > 1) {
                return [i, cache[value][1]];
            } else if (value !== nums[i]) {
                return [i, cache[value][0]];
            }
        }
    }
};