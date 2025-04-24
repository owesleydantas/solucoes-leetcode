class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        totalElementsDistinct = len(set(nums))
        count = 0

        for i in range(len(nums)):
            distinctElements = set()
            for j in range(i, len(nums)):
                distinctElements.add(nums[j])         
                if len(distinctElements) == totalElementsDistinct:
                    count += 1
                    
        return count