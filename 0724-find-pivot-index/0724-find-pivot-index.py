class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        l, r = 0, sum(nums)
        for index, element in enumerate(nums):
            r -= element
            if l == r:
                return index
            
            l += element
        return -1