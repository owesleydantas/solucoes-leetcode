/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let r = new Array(14).fill(0);
    let i = 1;
    let n = suits.length;

    for (; i < suits.length; i++) {
        if (suits[i - 1] !== suits[i]) break;
    }

    if (i === n) {
        return "Flush"
    }

    for (let i = 0; i < r.length; i++) {
        r[ranks[i]]++;
    }

    let res = 0;
    for (let i = 0; i < r.length; i++) {
        res = Math.max(res, r[i]);
    }

    if (res >= 3)  {
        return "Three of a Kind";
    } else if (res === 2) {
        return "Pair";
    }
    return "High Card";
};