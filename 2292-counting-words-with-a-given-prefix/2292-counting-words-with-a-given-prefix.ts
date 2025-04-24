function prefixCount(words: string[], pref: string): number {
    let count: number = 0;
    for (let value of words) {
        if (value.startsWith(pref)) count += 1;
    }
    return count;
};