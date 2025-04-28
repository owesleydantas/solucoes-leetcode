/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixes = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        this.prefixes[i + 1] = this.prefixes[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixes[right + 1] - this.prefixes[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */