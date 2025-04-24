function stringMatching(words: string[]): string[] {
    let result: string[] = []
    let set = new Set<string>()

    words.forEach(string => {
        for (let i = 0; i < words.length; i++) {
            if (string.includes(words[i]) && string !== words[i]) {
                set.add(words[i])
            }
        }
    })

    set.forEach(string => result.push(string))

    return result
};