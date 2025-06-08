/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        if (i === 0) {
            total +=  duration;
        } else {
            end = timeSeries[i - 1] + duration - 1;
            if (timeSeries[i] > end) {
                total += duration;
            } else {
                total += timeSeries[i] + duration - 1 - end;
            }
        }

    }

    return total;
};