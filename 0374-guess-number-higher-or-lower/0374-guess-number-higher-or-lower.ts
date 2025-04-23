/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let start = 1;
    let end = n;

    while (start <= end) {
       let currNum = Math.floor((end + start) / 2);
        if (guess(currNum) === -1) {
            end = currNum - 1;
        } else if (guess(currNum) === 1){
            start = currNum + 1;
        } else {
            return currNum;
        }
    }
    return -1
};