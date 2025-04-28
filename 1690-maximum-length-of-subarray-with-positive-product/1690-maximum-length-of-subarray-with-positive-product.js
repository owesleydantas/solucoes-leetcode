/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let maxLength = 0;
    let pos = 0;
    let neg = 0;

    for (let value of nums) {
        if (value === 0) {
            pos = 0;
            neg = 0;
        } else if (value > 0) {
            pos += 1;
            neg = neg > 0 ? neg + 1 : 0;
        } else {
            let newPos = neg > 0 ? neg + 1 : 0;
            neg = pos + 1;
            pos = newPos;
        }

        maxLength = Math.max(maxLength, pos);
    }

    return maxLength;
};