class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        newNums = [0] * len(nums)
        count = 0
        i = 0

        while i < len(nums) - 1:
            if nums[i] != 0:
                if nums[i] == nums[i + 1]:
                    newNums[count] = nums[i] * 2
                    i += 1
                else:
                    newNums[count] = nums[i]
                
                count += 1
            i += 1
        
        if i < len(nums) and nums[i] != 0:
            newNums[count] = nums[i]

        return newNums