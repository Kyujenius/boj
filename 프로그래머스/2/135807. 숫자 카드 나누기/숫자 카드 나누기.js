function solution(arrayA, arrayB) {
    var answer = 0;
    const gcdA = arrayA.reduce((acc,cur)=> gcd(acc,cur));
    const gcdB = arrayB.reduce((acc,cur)=>gcd(acc,cur));
    
    console.log(gcdA,gcdB);
    const aToB = arrayB.every((value)=> {
        if(value % gcdA !== 0) {
            return true;
        }else {
            return false;
        }
    })
    
    const bToA = arrayA.every((value)=> {
        if(value % gcdB !== 0) {
            return true;
        }else {
            return false;
        }
    })
    
    if(aToB == true && bToA == true) {
        return Math.max(gcdA,gcdB);
    }else if(aToB == true && bToA == false) {
        return gcdA;
    }else if(aToB == false && bToA == true) {
        return gcdB;
    }else {
        return 0;
    }
    
    function gcd (a,b) {
        if(b === 0) return a;
        return gcd(b,a % b);
    }
    
    return answer;
}