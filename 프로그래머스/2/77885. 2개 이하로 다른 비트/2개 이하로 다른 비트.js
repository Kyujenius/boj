function solution(numbers) {
    var answer = [];
    numbers.forEach((number,index, array) => {
        if(number % 2 === 0) {
            answer.push(number +1);   
        }else {
            let twoString = number.toString(2);
            twoString = '0' + twoString;
            const twoStringArr = twoString.split("");
            const lastZeroIndex = twoString.lastIndexOf('0');
            twoStringArr[lastZeroIndex] = '1';
            twoStringArr[lastZeroIndex+1] = '0';
            const twoNumber = parseInt(twoStringArr.join(""),2);
            answer.push(twoNumber);
        }
        
    })
    return answer;
}