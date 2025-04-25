function minimumOperations(nums: number[]): number {
    const hashMap = new Array<boolean>(101).fill(false);
    let firstDuplicateIdx = nums.length;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (hashMap[nums[i]]) break;

        hashMap[nums[i]] = true;
        firstDuplicateIdx = i;
    }
    return ((firstDuplicateIdx + 2) / 3) | 0;
};