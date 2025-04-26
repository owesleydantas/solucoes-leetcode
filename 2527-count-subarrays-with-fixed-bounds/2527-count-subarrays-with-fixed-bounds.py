class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        count = 0
        lastMinK = lastMaxK = -1
        lastInvalid = -1

        for i, num in enumerate(nums):
            if num < minK or num > maxK:
                lastInvalid = i
            if num == minK:
                lastMinK = i
            if num == maxK:
                lastMaxK = i

            if lastMinK != -1 and lastMaxK != -1:
                count += max(0, min(lastMinK, lastMaxK) - lastInvalid)

        return count 