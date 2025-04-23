class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        mask = 0
        maxValue = 0
        i = 0
        for j in range(len(nums)):
            while (mask & nums[j]) != 0:
                mask ^= nums[i]
                i += 1
            
            mask |= nums[j]
            maxValue = max(maxValue, j - i + 1)
        
        return maxValue