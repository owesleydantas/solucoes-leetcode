class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        rows = len(matrix)
        cols = len(matrix[0])
        res = []

        for i in range(cols):
            new = []
            for j in range(rows):
                new.append(matrix[j][i])
            res.append(new)
        
        return res