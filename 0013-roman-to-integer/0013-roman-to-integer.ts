function romanToInt(s: string): number {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const int = s.split('').map(x => romanValues[x]);
    return int.reduce((acc, v, i) => v < int[i + 1] ? acc - v : acc + v, 0);
};