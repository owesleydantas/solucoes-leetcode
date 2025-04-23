function lengthOfLastWord(s: string): number {
    const res = s.trim().split(" ")
    return res[res.length - 1].length
};