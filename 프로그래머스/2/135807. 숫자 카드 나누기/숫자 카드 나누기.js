function solution(arrayA, arrayB) {
    var answer = 0;
    const gcdA = arrayA.reduce((acc,cur) => gcd(acc,cur));
    const gcdB = arrayB.reduce((acc,cur) => gcd(acc,cur));
    // console.log(gcdA,gcdB);
    
    const isGCDANotGood = arrayB.some((value)=> value % gcdA ===0); 
    const isGCDBNotGood = arrayA.some((value)=> value % gcdB ===0); 
    let candidate = [0];
    if(!isGCDANotGood) {
        candidate.push(gcdA);
    }
    if(!isGCDBNotGood) {
        candidate.push(gcdB);
    }
    
    answer = Math.max(...candidate);
    
    
    /**
     영희가 [5, 17]이 적힌 카드를 갖는다면, 철수가 가진 카드들의 숫자는 모두 10으로 나눌 수 있고, 영희가 가진 카드들의 숫자는 모두 10으로 나눌 수 없습니다. 따라서 철수와 영희는 각각 [10, 20]이 적힌 카드, [5, 17]이 적힌 카드로 나눠 가졌다면 조건에 해당하는 양의 정수 a는 10이 됩니다.
    */
    return answer;
}

function gcd(a,b) {
    if(b === 0) return a;
    return gcd(b,a%b);
}