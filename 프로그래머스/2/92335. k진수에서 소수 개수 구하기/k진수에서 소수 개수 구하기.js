function solution(n, k) {
    var answer = 0;
    const newN = n.toString(k);
    const nArr= newN.split("0");
    console.log(n,k,nArr);
    
    function isPrime(number) {
        if(isNaN(number) || number <= 1) return false;
        if(number == 2) return true;
        if(number  % 2 == 0) return false;
        for (let i = 3; i<= Math.sqrt(number); i+=2) {
            if(number % i ===0) {
                return false;
            }
        }
        return true;
      
    }
    nArr.forEach((value)=> {
        const number = parseInt(value);
        if(isPrime(number)) {
            answer++;
        };
    })
    return answer;
}