/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops.length === 0) return m * n;

    let minA = Infinity;
    let minB = Infinity;

    for (const op of ops) {
        if (op[0] < minA) minA = op[0];
        if (op[1] < minB) minB = op[1];
    }

    return minA * minB;
};