function isPrefixOfWord(sentence: string, searchWord: string): number {
    const array: string[] = sentence.split(' ');
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1
};
