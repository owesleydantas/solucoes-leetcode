function getRow(rowIndex: number): number[] {
    const result = [[1]]

    for (let i = 0; i < rowIndex; i++) {
        const myRow = result[result.length - 1];
        const row = [1];

        for (let j = 1; j < myRow.length; j++) {
            row.push(myRow[j - 1] + myRow[j]);
        }
        row.push(1)
        result.push(row);
    }

    return result[rowIndex];
};