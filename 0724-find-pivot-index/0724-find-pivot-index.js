/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let l = 0
    let r = nums.reduce((acc, curr) => acc + curr, 0);
    let i = 0
    for (let element of nums) {
        r -= element;
        if (l === r) return i;

        l += element;
        i++;
    }
    return -1;
};