function dominantIndex(nums: number[]): number {
    const index = nums.reduce((p, c, i) => i === 0 || c > nums[p] ? i : p, 0);

    for (let i = 0, maxValue = nums[index]; i < nums.length; i++) {
        if (i !== index && nums[i] * 2 > maxValue) {
            return -1;
        }
    }
    return index;
};