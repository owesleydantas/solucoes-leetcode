/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let res = Infinity;
    for (let v = 1; v <= 6; v++) {
        let topSwaps = 0, bottomSwaps = 0;
        let valid = true;

        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== v && bottoms[i] !== v) {
                valid = false;
                break
            }
            if (tops[i] !== v) topSwaps++;
            if (bottoms[i] !== v) bottomSwaps++;
        }
        if (valid) {
            res = Math.min(res, topSwaps, bottomSwaps);
        }
    }
    return res == Infinity ? -1 : res;
};