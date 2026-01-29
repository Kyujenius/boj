function solution(sequence) {
    var answer = 0;
    const n = sequence.length;
    
    let acc1 = 0 ;
    let acc2 = 0 ;
    
    let maxValue1 = 0;
    let maxValue2 = 0;
    
    for(let i = 0; i<n; i++) {
        const value1 = i % 2 === 0 ? sequence[i] : -sequence[i];
        const value2 = -value1;
        //누적합 
        acc1 += value1;
        
        //누적합이랑 maxValue 랑 비교
        if(maxValue1 < acc1) {
            maxValue1 = acc1;
        }
        //누적값보다 value1이 더 크면, 누적값 그냥 value1으로 초기화
        if(value1 > acc1) {
            acc1 = value1;
        }
        
        acc2 += value2;

        if(maxValue2 < acc2) {
            maxValue2 = acc2;
        }
        
        if(value2 > acc2) {
            acc2 = value2;
        }
                
        
        
        
    }
    return Math.max(maxValue1,maxValue2);
}