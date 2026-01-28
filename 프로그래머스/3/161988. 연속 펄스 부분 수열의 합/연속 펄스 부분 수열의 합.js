function solution(sequence) {
    var answer = 0;
    
    const n = sequence.length;
    
    let acc1 = 0;
    let acc2 = 0;
    
    
    let maxVal =0;
    let maxVal2 = 0;
    for(let i = 0 ; i<n; i++) {
        const val = i % 2 === 0 ? sequence[i] : -sequence[i];
        const val2 = -val;
        
        acc1 = Math.max(val, acc1 + val);
        acc2 = Math.max(val2, acc2 + val2);
        
        maxVal = Math.max(maxVal, acc1);
        maxVal2  = Math.max(maxVal2, acc2);
    }
    
    answer = Math.max(maxVal,maxVal2);
    return answer;
}