class Solution:
    def countInterestingSubarrays(self, nums: List[int], modulo: int, k: int) -> int:
        hashmap = {0: 1}
        count = 0
        s = 0

        for num in nums:
            s += 1 if num % modulo == k else 0
            sMod = s % modulo

            a = (sMod - k + modulo) % modulo
            count += hashmap.get(a, 0)
            hashmap[sMod] = hashmap.get(sMod, 0) + 1
        
        return count