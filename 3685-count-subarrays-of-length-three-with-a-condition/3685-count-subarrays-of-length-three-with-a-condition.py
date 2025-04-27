class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        count = 0
        while len(nums) >= 3:
            if nums[0] + nums[2] == nums[1] / 2:
                count += 1
            nums.pop(0)
        
        return count