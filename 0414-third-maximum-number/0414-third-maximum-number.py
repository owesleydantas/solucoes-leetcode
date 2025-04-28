class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        numsSet = list(set(nums))
        numsSet.sort(reverse=True)

        if (len(numsSet) >= 3):
            return numsSet[2]

        return numsSet[0]