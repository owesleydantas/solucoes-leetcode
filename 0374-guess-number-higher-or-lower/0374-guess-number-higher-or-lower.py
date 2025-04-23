# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        s = 0
        e = n

        while s <= e:
            currentNum = round(s + (e - s) / 2)
            result = guess(currentNum)

            if result > 0:
                s = currentNum + 1

            elif (result < 0):
                e = currentNum - 1
            else:
                return currentNum