class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        count = 0
        allowed = set(allowed)

        for word in words:
            if all(char in allowed for char in word):
                count += 1
        
        return count