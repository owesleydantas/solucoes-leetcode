class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        inverso = x[::-1]
        if x == inverso:
            return True
        return False