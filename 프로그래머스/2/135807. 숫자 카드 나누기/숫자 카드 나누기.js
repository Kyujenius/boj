function solution(arrayA, arrayB) {
    var answer = 0;
    
    const gcdA = arrayA.reduce((acc,cur)=>{
        return getGCD(acc,cur);
    })
    
    const gcdB = arrayB.reduce((acc,cur)=> {
        return getGCD(acc,cur);
    })
    
    
    // console.log(gcdA,gcdB);
    
    const isGCDATrue = arrayB.every((value)=> value % gcdA !== 0);
    const isGCDBTrue = arrayA.every((value)=> value % gcdB !== 0);
    
    // console.log(isGCDATrue,isGCDBTrue)
    if(isGCDATrue === true && isGCDBTrue === true) {
        return Math.max(gcdA,gcdB);
    }
    
    if(isGCDATrue === true && isGCDBTrue === false) {
        return gcdA
    }
    if(isGCDBTrue === true && isGCDATrue === false) {
        return gcdB
    }
    
    function getGCD(a, b){
        if(b === 0) return a;
        
        return getGCD(b, a % b);
    };
    
    return answer;

}