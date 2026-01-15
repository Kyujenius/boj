function solution(g) {
    var answer = [];
    const gems = [...g];
    const goal =  new Set(gems).size;
    const gemMap = new Map();
    let leftPtr = 0;
    let rightPtr = 0;
    let pointerLength = Infinity;
    gemMap.set(gems[leftPtr],(gemMap.get(gems[leftPtr]) || 0)+1);
    
    while(true) {
        // console.log(gemMap);
      
        
        while(gemMap.size ===goal) {
            // console.log("들어와서", [leftPtr, rightPtr], gemMap);
            const size = rightPtr - (leftPtr-1);
            if(pointerLength > size) {
                pointerLength = size;
                answer = [leftPtr+1,rightPtr+1];
            }
            gemMap.set(gems[leftPtr] , gemMap.get(gems[leftPtr]) -1);
            
            if(gemMap.get(gems[leftPtr]) ===0) {
                gemMap.delete(gems[leftPtr]);
            }
            leftPtr++;
            

        }
        rightPtr++;
        if(rightPtr >= gems.length) break;
        
        gemMap.set(gems[rightPtr], (gemMap.get(gems[rightPtr])|| 0) +1);
        
    }
    
    return answer;
}