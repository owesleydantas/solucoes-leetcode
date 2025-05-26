/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let arr = [...nums.slice(0, i), ...nums.slice(i + 1)]
        if (!arr.includes(nums[i])) {
            count += nums[i]
        }
    }
    return count;
};