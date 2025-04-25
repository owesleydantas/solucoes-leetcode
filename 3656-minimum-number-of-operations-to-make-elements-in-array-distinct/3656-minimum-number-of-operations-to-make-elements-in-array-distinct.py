class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        count = 0
        while len(set(nums)) != len(nums):
            if len(nums) < 3:
                nums = []
            else:
                nums = nums[3:]
            count += 1
        return count 