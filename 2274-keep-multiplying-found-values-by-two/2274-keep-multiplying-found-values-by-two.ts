function findFinalValue(nums: number[], original: number): number {
    while (nums.includes(original)) {
        original *= 2;
    }
    return original;
};