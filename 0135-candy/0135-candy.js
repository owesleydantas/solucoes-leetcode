/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (!ratings || ratings.length === 0) return 0;

    let candies = new Array(ratings.length).fill(1);
    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
    }

    for (let j = ratings.length - 2; j >= 0; j--) {
        if (ratings[j] > ratings[j + 1]) {
            candies[j] = Math.max(candies[j], candies[j + 1] + 1);
        }
    }

    return candies.reduce((total, num) => total + num, 0)
};