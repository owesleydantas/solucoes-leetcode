class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        count = 0
        for i in grid:
            for value in i:
                if value < 0:
                    count += 1
        
        return count