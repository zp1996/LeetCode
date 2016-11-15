/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const len = numbers.length;
    for (let i = 0; i < len - 1; i++) {
        const value = target - numbers[i],
            pos = BinarySearch(i + 1, value);
        if (~pos) 
            return [i + 1, pos + 1];
    }
    function BinarySearch(left, value) {
        var right = len - 1;
        while (left <= right) {
            const mid = (left + right) / 2 | 0;
            if (numbers[mid] === value)
                return mid;
            else if (numbers[mid] < value)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
};