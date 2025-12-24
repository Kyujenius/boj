function solution(numbers) {
    var answer = [];
    numbers.forEach((number)=> {
        if(number % 2 == 0) {answer.push(number+1);}
        else {
            let stringNumber = '0'+ number.toString(2);
            const zeroIndex = stringNumber.lastIndexOf('0');
            const stringNumberArr = stringNumber.split('');
            stringNumberArr[zeroIndex] = '1'
            stringNumberArr[zeroIndex+1] = '0'
            stringNumber = stringNumberArr.join('');
            const newNumber = parseInt(stringNumber,2);
            answer.push(newNumber);
        }
    })
    return answer;
}