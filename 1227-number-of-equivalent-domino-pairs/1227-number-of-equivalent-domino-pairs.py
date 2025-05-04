class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        seen = [0] * 100
        equalPairs = 0
        for a, b in dominoes:
            val = a * 10 + b if a <= b else b * 10 + a
            equalPairs += seen[val]
            seen[val] += 1
        return equalPairs