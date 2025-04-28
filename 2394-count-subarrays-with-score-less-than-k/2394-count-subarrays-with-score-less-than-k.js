/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        while (currentSum * (i - start + 1) >= k) {
            currentSum -= nums[start];
            start++;
        }
        count += (i - start + 1)
    }
    return count;
};