/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    const pos = nums.filter(v => v > 0).length;
    const neg = nums.filter(v => v < 0).length;
    return Math.max(pos, neg);
};