function solution(numbers) {
    const strNumbers = numbers.map(number => number.toString());
    strNumbers.sort((a, b) => {
        return (b + a) - (a + b);
    });
    if (strNumbers[0] === '0') {
        return '0';
    }
    return strNumbers.join('');
}
