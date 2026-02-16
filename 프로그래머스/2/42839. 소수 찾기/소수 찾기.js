function solution(numbers) {
    var answer = 0;
    const n = numbers.length;
    const numberArr = numbers.split("").map(Number);
    //1부터 n자리의 모든 숫자 만들기 -> dfs
    //모든 순열 만들기 + set 이용해서 최적화 하기
    const permutationSet = new Set();
    const visited = Array(n).fill(false);    

    for(let maxCount = 1; maxCount<=n; maxCount++) {
        getPermutation("",maxCount);
    }
    
    function getPermutation(cur,count) {
        const numCur = parseInt(cur);
        if(cur.length === count && !permutationSet.has(numCur)) {
            permutationSet.add(numCur);
            if(isPrime(numCur) === true) {
                // console.log(numCur);
                answer++;
            }
            return cur;
        }
        for(let i = 0; i<numberArr.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                getPermutation(cur+numberArr[i],count,visited);
                visited[i] = false;
            }
        }
    }
    
    function isPrime(number) {
        if(number < 2) return false;
        for(let i = 2; i<=Math.sqrt(number); i++) {
            if(number % i === 0) return false;
        }
        return true;
    }
    
    return answer;
}