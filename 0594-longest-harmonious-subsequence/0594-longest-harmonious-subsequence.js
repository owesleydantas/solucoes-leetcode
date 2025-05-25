/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const freq = new Map();
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let result = 0;
    for (let [num, count] of freq.entries()) {
        if (freq.has(num + 1)) {
            result = Math.max(result, count + freq.get(num + 1));
        }
    }

    return result;
};