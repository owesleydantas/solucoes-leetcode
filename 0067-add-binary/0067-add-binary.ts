function addBinary(a: string, b: string): string {
    let result = "";
    let lenA = a.length -1;
    let lenB = b.length -1;
    let carr = 0;

    while(lenA >= 0 || lenB >= 0 || carr > 0) {
        let bitA = lenA >= 0 ? parseInt(a[lenA]) : 0;
        let bitB = lenB >= 0 ? parseInt(b[lenB]) : 0;

        const sum = bitA + bitB + carr;

        result = (sum % 2).toString() + result;
        carr = Math.floor(sum / 2);

        lenA--;
        lenB--;
    }

    return result;
};

