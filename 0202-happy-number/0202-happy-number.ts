function isHappy(n: number): boolean {
    let copies = [n]
    n = getSum(n)
    if (n === 1) return true;

    while (!copies.includes(n)) {
        if (n === 1) return true;
        copies.push(n)
        n = getSum(n)
    }
    return false;
}

function getSum(num: number): number {
    let sum = 0

    for (let n of num.toString()) {
        sum += Number(n) ** 2;
    }
    return sum
}