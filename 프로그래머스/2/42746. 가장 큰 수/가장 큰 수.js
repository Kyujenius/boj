function solution(numbers) {
    var answer = '';
    numbers.sort((a,b)=> {
        let bString = b.toString()
        let aString = a.toString()
        const bNum = parseInt(bString+aString);
        const aNum = parseInt(aString+bString);
        return bNum - aNum;
    })
    answer = numbers.join('');
    if(answer[0] === '0') {
        return '0';
    }
    return answer;
}