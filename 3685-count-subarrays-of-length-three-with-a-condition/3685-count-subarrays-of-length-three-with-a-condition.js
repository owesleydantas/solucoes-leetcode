/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;
    while (nums.length >= 3) {
        if (nums[0] + nums[2] === nums[1] / 2) count++;
        nums.shift();
    }
    return count;
};