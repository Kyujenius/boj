function solution(N, number) {
    var answer = 0;
    const dp = Array.from({length:9}, ()=> new Set());
    for (let i = 1 ; i<9; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        for (let j = 1; j<i; j++) {
            for(const num1 of dp[i-j]){
                for(const num2 of dp[j]) {
                    dp[i].add(num1 +num2);
                    dp[i].add(num1 -num2);
                    dp[i].add(num1 *num2);
                    if(num2 !== 0) {
                        dp[i].add(Math.floor(num1 /num2));                        
                    }
                }
            }
        }
                    
        if(dp[i].has(number)) {
            return i;
        }
    }
    // console.log(dp);
    return -1;
}