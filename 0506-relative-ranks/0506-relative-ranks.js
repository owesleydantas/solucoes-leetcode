/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const answer = [];
    const scoreWithIndex = score.map((score, index) => [score, index]);
    
    scoreWithIndex.sort((a, b) => b[0] - a[0]);
    const rank = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let i = 0; i < score.length; i++) {
        const index = scoreWithIndex[i][1];
        if (i < 3) {
            answer[index] = rank[i];
        } else {
            answer[index] = String(i + 1);
        }
    }

    return answer;
};