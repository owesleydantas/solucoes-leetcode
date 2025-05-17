/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let terra = 0, adjacentes = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                terra++;

                if (i < grid.length - 1 && grid[i+1][j] === 1) adjacentes++;
                if (j < grid[0].length - 1 && grid[i][j+1] === 1) adjacentes++;
            }
        }
    }

    return 4 * terra - 2 * adjacentes;
};