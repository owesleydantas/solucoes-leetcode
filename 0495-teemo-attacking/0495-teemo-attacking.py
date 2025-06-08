class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        total = 0
        for i in range(len(timeSeries)):
            if i == 0:
                total += duration
            else:
                end = timeSeries[i - 1] + duration - 1
                if timeSeries[i] > end:
                    total += duration
                else:
                    total += timeSeries[i] + duration - 1 - end
        
        return total