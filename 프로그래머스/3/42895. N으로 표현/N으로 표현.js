function solution(N, number) {
    var answer = 0;
    const dp = Array.from({length: 9}, () => new Set());
    for(let i = 1; i<= 8; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        for(let j = 1; j<i; j++){
            const k = i-j;
            // dp[j] 세트의 모든 원소에 대해 반복
            for (const num1 of dp[j]) {
                // dp[k] 세트의 모든 원소에 대해 반복
                for (const num2 of dp[k]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    // 나누는 수가 0이 아닐 경우에만 나눗셈 수행
                    if (num2 !== 0) {
                        dp[i].add(Math.floor(num1 / num2));
                    }
                }
            }
        }
        if(dp[i].has(number)) {
            return i;
        }
    }
    
    console.log(dp);
    return -1;
}