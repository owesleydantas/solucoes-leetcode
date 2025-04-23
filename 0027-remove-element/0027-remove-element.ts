function removeElement(nums: number[], val: number): number {
    let count: number = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count += 1;
        }
    }
    return count
};