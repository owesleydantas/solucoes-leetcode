class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        setNums = set(nums)
        arr = []

        for i in range(1, len(nums) + 1):
            if i not in setNums:
                arr.append(i)

        return arr