/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.reduce((count, info) => {
        const a = info[11];
        const b = info[12];
        return count + (a > '6' || (a === '6' && b > '0') ? 1 : 0);
    }, 0);
};