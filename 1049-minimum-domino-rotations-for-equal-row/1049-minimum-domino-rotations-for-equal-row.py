class Solution:
    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:
        res = float('inf')
        for v in range(1, 7):
            topSwaps = bottomSwaps = 0
            valid = True

            for i in range(len(tops)):
                if tops[i] != v and bottoms[i] != v:
                    valid = False
                    break
                
                if tops[i] != v:
                    topSwaps += 1
                if bottoms[i] != v:
                    bottomSwaps += 1
            
            if valid:
                res = min(res, topSwaps, bottomSwaps)
        
        return -1 if res == float('inf') else res