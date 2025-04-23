function countNegatives(grid: number[][]): number {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let value of grid[i]) {
            if (value < 0) count++;
        }
    }
    return count;
};