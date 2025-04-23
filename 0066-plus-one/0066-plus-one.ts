function plusOne(digits: number[]): number[] {
    let digit = digits.join('');
    let numDigit = BigInt(digit) + BigInt(1);

    return numDigit.toString().split('').map(Number);
};