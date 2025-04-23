/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let value of grid[i]) {
            if (value < 0) count++;
        }
    }
    return count;
};