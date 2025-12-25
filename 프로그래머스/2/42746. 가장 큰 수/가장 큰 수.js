function solution(numbers) {
    var answer = '';
    numbers.sort((a,b)=> {
        const aString = a.toString();
        const bString = b.toString();
        const aFirstNum = parseInt(aString+bString)
        const bFirstNum = parseInt(bString+aString);
        return bFirstNum- aFirstNum  ;
    })
    if(numbers[0] === 0) {
        return '0'
    }
    return numbers.join('');
}