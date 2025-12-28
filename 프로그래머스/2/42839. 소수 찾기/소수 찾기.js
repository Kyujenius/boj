function solution(numbers) {
    var answer = 0;
    const numArray = numbers.split("");
    console.log(numArray);
    const visited = Array(numArray.length).fill(false);
    console.log(visited);
    const set = new Set();
    function dfs(currentNum) {
        for(let i = 0 ; i<numArray.length; i++) {
            if(visited[i] == false) {
                visited[i] = true;
                const newNum = currentNum + numArray[i];
                const num = parseInt(newNum)
                if(isPrime(num) && !set.has(num)) {
                    set.add(num);
                    console.log(num)
                    answer++
                }
                dfs(newNum);   
                visited[i] = false;
            }
        }
        
    }
    dfs("");
    return answer;
}

function isPrime(number) {
    const sqrtNum = Math.sqrt(number);
    if(number <2) {
        return false;
    }
    if(number ==2 || number ==3) return true;
    for(let i = 2; i<=sqrtNum; i++) {
        if(number % i === 0) return false;
    }
    return true;
}