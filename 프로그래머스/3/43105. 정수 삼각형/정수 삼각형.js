function solution(triangle) {
    const N = triangle.length;
    const dp = Array.from(Array(N), ()=> Array(N).fill(0));
    dp[0][0] = triangle[0][0];
    dp[1][0] = triangle[0][0] + triangle[1][0];
    dp[1][1] = triangle[0][0] + triangle[1][1];
    
    for(let i = 1; i<N; i++) {
        dp[i][0] = dp[i-1][0] + triangle[i][0];

        for(let k = 1; k<i+1; k++) {
            dp[i][k] = Math.max(dp[i-1][k-1], dp[i-1][k]) + triangle[i][k];
        }
    }
    const result = Math.max(...dp[triangle.length-1])
    return result;
}