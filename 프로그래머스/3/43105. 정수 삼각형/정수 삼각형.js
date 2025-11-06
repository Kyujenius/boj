function solution(triangle) {
    var answer = 0; 
    const dp = Array.from({length: triangle.length}, () => []);

    // triangle[i][j] 의 최대는
    // i가 0 이거나, i 번째 배열의 끝이면 무조건 정해져있고,
    // 그게 아닌 경우에는 dp[i][j] = [i-1][j-1]과 [i-1][j] 둘 중 큰 것 + [i][j] 인 것        
    for(let i = 0 ; i<triangle.length; i++) {
        if(i === 0) {
            dp[i].push(triangle[i][0]);
        }else if(i === 1) {
            dp[i].push(triangle[i][0]+triangle[i-1][0]);
            dp[i].push(triangle[i][1]+triangle[i-1][0]);
        }else {
            //3번째 줄부터는 이제 규칙 적용
            const lastIdx = triangle[i].length-1;
            dp[i].push(triangle[i][0]+dp[i-1][0])
            for(let j = 1; j<lastIdx; j++) {
                dp[i].push(Math.max(dp[i-1][j-1], dp[i-1][j]) +triangle[i][j]);
            }
            dp[i].push(triangle[i][lastIdx]+dp[i-1][lastIdx-1]);
        }
    }
    answer = Math.max(...dp[triangle.length-1]);
    return answer;
}