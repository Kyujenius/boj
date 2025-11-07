function solution(triangle) {
    var answer = 0;
    const dp = Array.from({length: triangle.length}, () => []);
    // console.log(dp);
    for(let i =0 ;i<triangle.length; i++) {
        const beforeDP = dp[i-1];
        const now = triangle[i];
        const lastIdx = triangle[i].length-1;
        if(i==0) {
            dp[0].push(now[0]);
        }else if(i==1) {
            dp[1].push(beforeDP[0] + now[0]);
            dp[1].push(beforeDP[0] + now[1]);
        }else {
        dp[i].push(beforeDP[0] + now[0]);
        for(let j =1; j<lastIdx; j++) {
            dp[i].push(Math.max(beforeDP[j-1], beforeDP[j])+now[j]);    
        }
        dp[i].push(beforeDP[lastIdx-1] + now[lastIdx]);    
        }
    }
    answer= Math.max(...dp[dp.length-1]);
    return answer;
}