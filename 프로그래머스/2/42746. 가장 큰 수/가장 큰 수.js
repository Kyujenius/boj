function solution(numbers) {
    var answer = '';
    numbers.sort((a,b)=> {
        const aString = a.toString();
        const bString = b.toString();
        const aFirst  =parseInt(aString + bString);
        const bFirst = parseInt(bString + aString);
        return bFirst - aFirst;
    })
    answer = numbers.join("");
    if(parseInt(answer) ===0) return "0"
    return answer;
}