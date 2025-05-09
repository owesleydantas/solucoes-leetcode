class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        count = 0
        g.sort()
        s.sort()
        
        for c in s:
            if c >= g[count]:
                count += 1
                if count == len(g):
                    break
        
        return count