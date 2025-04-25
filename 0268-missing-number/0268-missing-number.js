/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        n += i - nums[i];
    }
    return n;
};