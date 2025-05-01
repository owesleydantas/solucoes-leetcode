/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const setNums = new Set(nums);
    const arr = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!setNums.has(i)) {
            arr.push(i);
        }
    }
    return arr;
};