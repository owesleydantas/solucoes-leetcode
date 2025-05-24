class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        summ = 0
        for num in set(nums):
            if nums.count(num) == 1:
                summ += num
            else:
                continue
        return summ