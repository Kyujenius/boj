function solution(gems) {
    var answer = [];
    const gemSet = new Set();
    gems.forEach((gem)=>gemSet.add(gem));
    const goal = gemSet.size;
    const gemMap = new Map();
    let leftPtr = 0;
    let rightPtr = 0;
    let length = Infinity;
    gemMap.set(gems[0], (gemMap.get(gems[0]) || 0) +1);
    while(rightPtr < gems.length) {
           while(gemMap.size === goal) {
            // console.log(`goal 하고 gemMap의 사이즈가 같을 때, leftPtr: ${leftPtr}, rightPtr: ${rightPtr}`);           
            if(length > (rightPtr - leftPtr)) {
                answer = [leftPtr+1, rightPtr+1] ;    
                length = rightPtr-leftPtr;
            }
            
            
            if(gemMap.get(gems[leftPtr]) === 1){
                gemMap.delete(gems[leftPtr]);
            }else {
                gemMap.set(gems[leftPtr], gemMap.get(gems[leftPtr]) -1);    
            }    
            leftPtr++;
        }
        rightPtr++;
        gemMap.set(gems[rightPtr], (gemMap.get(gems[rightPtr]) || 0) +1);
//         console.log(`leftPtr: ${leftPtr}, rightPtr: ${rightPtr}`);
//         console.log(gemMap);
     
        
        
    }
    return answer;
}