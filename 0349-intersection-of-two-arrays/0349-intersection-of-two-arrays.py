class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        arrSet = set(nums1)
        result = []

        for num in nums2:
            if num in arrSet:
                result.append(num)
                arrSet.remove(num)
                
        return result