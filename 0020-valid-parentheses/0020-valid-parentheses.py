class Solution:
    def isValid(self, s: str) -> bool:
        opcl = dict(('()', '[]', '{}'))
        stck = []

        for char in s:
            if char in '([{':
                stck.append(char)
            
            elif len(stck) == 0 or char != opcl[stck.pop()]:
                return False
        
        return len(stck) == 0