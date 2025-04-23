function removeDuplicates(nums: number[]): number {
    let i: number = 0;

    for (let j = 1; j <= nums.length; ++j) {
        if (nums[j] !== nums[i]) {
            i += 1;
            nums[i] = nums[j]
        }
        
    }

    return i
};