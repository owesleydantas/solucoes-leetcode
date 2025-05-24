class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        x = 0
        for num in nums:
            x ^= (1 << num)
        return x == 0