/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const count = {};
    const setBanned = new Set(banned.map(word => word.toLowerCase()));
    const words = paragraph.toLowerCase().split(/[^a-z]+/).filter(word => word);

    let maxCount = 0;
    let res = "";

    for (const word of words) {
        if (!setBanned.has(word)) {
            count[word] = (count[word] || 0) + 1;
            if (count[word] > maxCount) {
                maxCount = count[word];
                res = word;
            }
        }
    }

    return res;
};