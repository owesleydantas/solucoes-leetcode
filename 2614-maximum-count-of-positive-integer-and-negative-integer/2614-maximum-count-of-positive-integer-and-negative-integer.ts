function maximumCount(nums: number[]): number {
    const pos = nums.filter(v => v > 0).length;
    const neg = nums.filter(v => v < 0).length;
    return Math.max(pos, neg);
};