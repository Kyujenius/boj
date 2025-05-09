function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i<numbers.length; i++) {
        const pushed = numbers[i];
        for(let k = 1 ; k<numbers.length - i; k++) {
            answer.push(pushed+numbers[i+k]);
        }    
    }
    answer = [...new Set(answer)].sort((a,b) => a-b);
    return answer;
}