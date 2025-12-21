function solution(n, s) {
    var answer = [];
    const k = s % n;
    if(s<n) return [-1];
    const length = Math.floor(s / n);

    for(let i = 0 ; i<n-k; i++) {
        answer.push(length);
    }

    for(let i = 0 ; i<k; i++) {
        answer.push(length+1);
    }
        
    
    return answer;
}