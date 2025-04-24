function isPrefixAndSuffix(str1: string, str2: string) {
    if (str2.startsWith(str1) && str2.endsWith(str1)){
        return true;
    }
    return false;
}

function countPrefixSuffixPairs(words: string[]): number {
    let count: number = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i < j && isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }
    return count;
};