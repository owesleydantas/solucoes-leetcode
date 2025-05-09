/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let c = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    for (let v of s) {
        if (v >= g[c]) {
            c++;
            if (c === g.length) break;
        }
    }

    return c
};