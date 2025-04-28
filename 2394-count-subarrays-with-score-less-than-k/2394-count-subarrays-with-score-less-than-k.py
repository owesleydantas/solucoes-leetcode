class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        count = 0
        currentSum = 0
        start = 0

        for end in range(len(nums)):
            currentSum += nums[end]
            while currentSum * (end - start + 1) >= k:
                currentSum -= nums[start]
                start += 1
            count += end - start + 1
        
        return count