class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count = 0
        Max = 0
        for num in nums:
            if num == 1:
                count += 1
                Max = max(Max, count)
            else:
                count = 0
        return Max

            