class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        maxElement = max(nums)
        result = 0
        end = maxFreq = 0

        for start in range(len(nums)):
            if nums[start] == maxElement:
                maxFreq += 1
            while maxFreq == k:
                result += len(nums) - start
                if nums[end] == maxElement:
                    maxFreq -= 1
                end += 1
                
        return result