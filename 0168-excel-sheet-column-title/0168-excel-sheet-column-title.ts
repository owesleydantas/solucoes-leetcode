function convertToTitle(columnNumber: number): string {
    let result = "";

    while (columnNumber > 0) {
        columnNumber--;
        const remainder = columnNumber % 26;
        result = String.fromCharCode(65 + remainder) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};