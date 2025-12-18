function solution(n, s) {
    var answer = [];
    // 최고집합 : 합이 S 가 되는 집합, 이걸 만족하면서 원소 곱이 최대가 되는 집합        
    if(s < n) return [-1];
    if(s % n === 0) {
        console.log(s%n);
        for(let i =0  ; i <n; i++) answer.push(s/n);
        return answer;
    }
    const k = s % n ;
    for(let i =0; i < n; i++) {
        answer.push(Math.floor(s/n));
    };
    // console.log(k);
    for(let i = n-k; i<n; i++) {
        answer[i] +=1;
    }
    
    return answer;
}