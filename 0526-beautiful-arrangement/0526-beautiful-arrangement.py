class Solution:
    def backTrack(self, n: int, p: int, v: List[bool]) -> int:
        if p > n:
            return 1
        count = 0
        for num in range(1, n + 1):
            if not v[num] and (num % p == 0 or p % num == 0):
                v[num] = True
                count += self.backTrack(n, p + 1, v)
                v[num] = False
        return count

    def countArrangement(self, n: int) -> int:
        v = [False] * (n + 1)
        return self.backTrack(n, 1, v)