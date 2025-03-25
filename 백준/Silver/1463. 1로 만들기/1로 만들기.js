const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// const input = 22;
const number = parseInt(input);

function bottomUpDP(n) {
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    // 1을 빼는 연산
    dp[i] = dp[i - 1] + 1;

    // 2로 나누는 연산 (가능한 경우)
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    // 3으로 나누는 연산 (가능한 경우)
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[n];
}

const answer = bottomUpDP(number);
console.log(answer);
