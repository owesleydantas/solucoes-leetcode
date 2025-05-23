class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        i = 0
        n = len(arr)
        while i < n:
            if arr[i] == 0:
                arr.insert(i + 1, 0)
                i += 2
            else:
                i += 1
        
        arr[:] = arr[:n]
        