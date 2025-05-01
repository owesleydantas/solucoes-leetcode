class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        r = [0] * 14
        for i in range(1, len(suits)):
            if (suits[i - 1] != suits[i]):
                break
        else:
            return "Flush"
        
        for rank in ranks:
            r[rank] += 1
        
        res = max(r)
        
        if res >= 3:
            return "Three of a Kind"
        elif res == 2:
            return "Pair"
        return "High Card"