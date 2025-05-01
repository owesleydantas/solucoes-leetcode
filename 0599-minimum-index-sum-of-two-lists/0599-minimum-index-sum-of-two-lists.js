/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let indexMap = new Map();
    let minSum = Infinity;
    let result = [];

    list1.forEach((word, i) => indexMap.set(word, i));
    list2.forEach((word, j) => {
        if (indexMap.has(word)) {
            let indexSum = indexMap.get(word) + j;
            if (indexSum < minSum) {
                minSum = indexSum;
                result = [word];
            } else if (indexSum === minSum) {
                result.push(word);
            }
        }
    });

    return result;
};