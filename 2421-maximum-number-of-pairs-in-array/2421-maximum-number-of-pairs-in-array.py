class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        pairs, hashMap = 0, {}

        for num in nums:
            if num in hashMap:
                del hashMap[num]
                pairs += 1
            else:
                hashMap[num] = 1
        
        return [pairs, len(hashMap)]