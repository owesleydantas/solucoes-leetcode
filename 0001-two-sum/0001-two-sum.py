class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        saida = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in saida:
                return [saida[diff], i]
            saida[num] = i