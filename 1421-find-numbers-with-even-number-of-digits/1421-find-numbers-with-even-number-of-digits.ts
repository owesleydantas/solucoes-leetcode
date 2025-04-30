function findNumbers(nums: number[]): number {
    let count: number = 0;

    nums.forEach((num) => {
        if (("" + num).length % 2 === 0) count++;
    })

    return count;
};