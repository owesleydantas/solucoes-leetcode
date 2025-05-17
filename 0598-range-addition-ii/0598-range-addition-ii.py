class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        if not ops:
            return m * n
        
        minA = min(op[0] for op in ops)
        minB = min(op[1] for op in ops)

        return minA * minB