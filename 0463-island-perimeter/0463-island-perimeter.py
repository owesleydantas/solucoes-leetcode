class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        terra, adjacentes = 0, 0

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    terra += 1

                    if i < len(grid) - 1 and grid[i+1][j] == 1:
                        adjacentes += 1
                    if j < len(grid[0]) - 1 and grid[i][j+1] == 1:
                        adjacentes += 1
        
        return 4 * terra - 2 * adjacentes