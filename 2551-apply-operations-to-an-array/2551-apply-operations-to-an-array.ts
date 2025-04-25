function applyOperations(nums: number[]): number[] {
    const r = nums.length - 1;
    for (let i = 0; i < r; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    const zeros = nums.filter(v => v === 0).length;
    nums = nums.filter(v => v > 0)

    for (let j = 0; j < zeros; j++) {
        nums.push(0)
    }
    return nums
};