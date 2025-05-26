class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        count = defaultdict(int)
        banned = set(word.lower() for word in banned)
        words = re.split(r'[^A-Za-z]+', paragraph.lower())

        maxCout = 0
        res = ""

        for word in words:
            if word and word not in banned:
                count[word] += 1
                if count[word] > maxCout:
                    maxCout = count[word]
                    res = word
        
        return res