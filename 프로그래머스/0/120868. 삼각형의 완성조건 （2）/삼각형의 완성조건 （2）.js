function solution(sides) {
    var answer = 0;
    const A = Math.max(...sides);
    const B = Math.min(...sides);
    console.log(A,B);
    
    const min = Math.abs(A-B)+1;
    const max = Math.abs(A+B)-1;
    answer = max-min+1
    return answer;
}