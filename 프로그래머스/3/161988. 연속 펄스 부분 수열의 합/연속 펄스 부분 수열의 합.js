function solution(sequence) {
    var answer = 0;
    const n = sequence.length;
    let acc1 = 0;
    let acc2 = 0;
    
    let biggest1 = 0;
    let biggest2 = 0;
    
    for(let i = 0 ; i<n; i++) {
        const val1 = i % 2 === 0 ? sequence[i] : -sequence[i];
        const val2 = -val1;
        
        //가장 큰 누적합 vs 지금 값이랑 비교해서 누적합이 더 큰지 확인 
        acc1 = acc1 + val1;
        acc2 = acc2 + val2;
        
        if(acc1 < val1) {
            acc1 = val1;
        }
        
        if(acc2 < val2) {
            acc2 = val2;
        }
        
        biggest1 = Math.max(biggest1, acc1);
        biggest2 = Math.max(biggest2, acc2);
        
    }
    return Math.max(biggest1,biggest2);
}