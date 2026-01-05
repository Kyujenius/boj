function solution(numbers) {
    var answer = 0;
    const splittedNumber = numbers.split("");
    const n = splittedNumber.length;
    const visited = Array(n).fill(false);
    const result = new Set();
    
    recursiveFn("");
    
    function recursiveFn(currentString) {
        const newNumber = parseInt(currentString);
        if(newNumber > 0 && isPrime(newNumber) && !result.has(newNumber)) {
            result.add(newNumber);
            console.log(newNumber);
        }
        for(let i = 0; i<splittedNumber.length; i++) {
            if(visited[i] ===false) {
                visited[i] = true;
                recursiveFn(currentString + splittedNumber[i])
                visited[i] = false;
            }
        }    
    }
    
    function isPrime(number) {
        if(number < 2) return false;
        if(number === 2) return true;
        if(number === 3) return true;
        for(let i = 2; i<=Math.sqrt(number); i++) {
            if(number % i === 0) return false;
        }
        return true;
    }
    
    return result.size;
}