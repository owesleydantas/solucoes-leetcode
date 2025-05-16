/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxGain = 0, totalGain = 0;
    for (let value of gain) {
        totalGain += value;
        maxGain = Math.max(maxGain, totalGain);
    }

    return maxGain;
};