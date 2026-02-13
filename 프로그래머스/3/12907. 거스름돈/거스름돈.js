function solution(n, money) {
    var answer = 0;
    const dp = Array(n+1).fill(0);
    dp[0] = 1;
    
    for(const coin of money) {
        for(let i = coin; i<=n; i++) {
            // console.log(`i : ${i}`);
            // console.log(`dp[${i}] : ${dp[i]}, dp[${i}-${coin}] : ${dp[i-coin]}`)
            dp[i] = dp[i] + dp[i-coin];
        }
    }
    
    console.log(dp);
    return dp[n];
}


// 가장 핵심의 로직 i원을 만드는 방법의 개수 = dp[i]
// i원을 만드는 방법 중 k원을 것을 쓸 때에 대해서 는 k원짜리를 일단 쓴 뒤 남은 금액을 만드는 법을 더한다.
// k원을 써서 i원 만드는 방법 -> dp[i] = dp[i] + dp[i-k];
// 