function searchInsert(nums: number[], target: number): number {
    let low: number = 0;
    let hight: number = nums.length - 1

    while ( low <= hight) {
        let mid: number = Math.floor(low + hight);

        if (target > nums[mid]) {
            low = mid + 1;
        } else {
            hight = mid - 1;
        }

    }
    return low;
};