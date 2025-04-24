class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = [[1]]
        for _ in range(numRows - 1):
            myRow = [0] + result[-1] + [0]
            row = []
            for i in range(len(result[-1]) + 1):
                row.append(myRow[i] + myRow[i + 1])
            result.append(row)
        return result