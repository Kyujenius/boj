function solution(n){
    var answer = 0;
    let changingN = n;
    while(changingN >=1) {
        const number = changingN % 10 ; 
        answer += number;
        changingN  = Math.floor(changingN / 10 );
    }
    return answer;
}