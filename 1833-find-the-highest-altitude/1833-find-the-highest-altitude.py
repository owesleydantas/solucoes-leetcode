class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        maxGain, totalGain = 0, 0
        for value in gain:
            totalGain += value
            maxGain = max(maxGain, totalGain)
        return maxGain