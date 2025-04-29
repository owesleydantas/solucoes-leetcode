/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const maxElement = Math.max(...nums);
    let result = 0;
    let end = 0;
    let maxCount = 0;

    for (let start = 0; start < nums.length; start++) {
        if (nums[start] === maxElement) maxCount++;

        while (maxCount === k) {
            result += nums.length - start;
            if (nums[end] === maxElement) maxCount--;
            end++;
        }
    }

    return result
};