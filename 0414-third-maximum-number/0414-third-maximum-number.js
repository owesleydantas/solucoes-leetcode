/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const numsSet = [...new Set(nums)];
    numsSet.sort((a, b) => b - a);
    
    if (numsSet.length >= 3) {
        return numsSet[2];
    }
    return numsSet[0];
};