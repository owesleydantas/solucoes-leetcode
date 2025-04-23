function strStr(haystack: string, needle: string): number {
    let split: string[] = haystack.split(needle);

    if (split.length === 1) {
        return -1
    }

    return split[0].length;
};