function intersection(nums1: number[], nums2: number[]): number[] {
    const set = new Set(nums1);
    const result: number[] = [];

    for (let num of nums2) {
        if (set.has(num)) {
            result.push(num);
            set.delete(num);
        }
    }
    return result;
};