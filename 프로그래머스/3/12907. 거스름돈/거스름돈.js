function solution(n, money) {
    var answer = 0;
    const MOD = 1000000007;
    const dp = Array(n+1).fill(0);
    
    dp[0] = 1;
    
    for(const coin of money) {
        for(let i = coin ; i<=n; i++) {
            dp[i] = (dp[i] + dp[i-coin]) % MOD;
        }
    }
    // console.log(dp);
    answer = dp[n];
    return answer;
}