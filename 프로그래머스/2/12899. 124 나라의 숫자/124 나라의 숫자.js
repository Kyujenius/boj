function solution(n) {
    var answer = '';
    while(n >= 1) {
        answer = getNumber(n) + answer;
        if(n % 3 === 0) {
            n = Math.floor(n/3) -1
        }else {
            n = Math.floor(n/3);
        }
    }
    
    return answer;
}

function getNumber(a) {
    if(a % 3 === 1) return '1';
    if(a % 3 === 2) return '2';
    if(a % 3 === 0) return '4';
}