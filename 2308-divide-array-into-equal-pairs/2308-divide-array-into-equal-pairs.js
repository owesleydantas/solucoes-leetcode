/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    return nums.reduce((a, v) => (a[v] = !a[v], a), []).every(v => !v);
};