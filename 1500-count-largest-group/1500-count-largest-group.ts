
function countLargestGroup(n: number): number {
    const g:  Map<number, number> = new Map();

    for (let i = 1; i <= n; i++) {
        let sum = 0, number = i;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        g.set(sum, (g.get(sum) ?? 0) + 1);
    }

    const maxSize = Math.max(...g.values());

    let result = 0;
    for (let count of g.values()) {
        if (count === maxSize) result++;
    }

    return result;
};