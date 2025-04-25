class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        pos = len([x for x in nums if x > 0])
        neg = len([x for x in nums if x < 0])

        return max(pos, neg)