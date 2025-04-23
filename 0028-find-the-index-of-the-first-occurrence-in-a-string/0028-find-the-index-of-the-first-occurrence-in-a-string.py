class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        split = haystack.split(needle)

        if len(split) == 1:
            return -1
        
        return len(split[0])