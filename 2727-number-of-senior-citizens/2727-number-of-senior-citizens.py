class Solution:
    def countSeniors(self, details: List[str]) -> int:
        count = 0
        for passager in details:
            if int(passager[11:][:2]) > 60:
                count += 1
        
        return count
        