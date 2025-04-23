class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = ""
        strs = sorted(strs)
        f = strs[0]
        l = strs[-1]

        for i in range(min(len(f), len(l))):
            if f[i] != l[i]:
                return result
            result += f[i]
        
        return result
