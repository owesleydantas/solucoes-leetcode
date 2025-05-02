class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        q = dividend/ divisor
        if q > pow(2,31) -1:
            return pow(2,31) -1
        if q < -pow(2,31):
            return -pow(2,31)

        return int(q)