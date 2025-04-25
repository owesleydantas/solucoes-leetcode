function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const hashmap = new Map<number, number>()
    hashmap.set(0, 1)
    let count = 0;
    let sum = 0;

    for (let value of nums) {
        sum += value % modulo === k ? 1 : 0;
        count += (hashmap.get((sum + modulo - k) % modulo) || 0);
        hashmap.set(sum % modulo, (hashmap.get(sum % modulo) || 0) + 1);
    }
    return count;
};