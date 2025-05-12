/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in hashMap) {
            return [i, hashMap[target - nums[i]]];
        }
        hashMap[nums[i]] = i;
    }
};