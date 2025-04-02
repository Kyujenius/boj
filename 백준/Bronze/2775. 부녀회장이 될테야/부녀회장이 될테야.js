
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
let lineIndex = 1;
for (let i = 0; i < T; i++) {
  const K = parseInt(input[lineIndex++]);
  const N = parseInt(input[lineIndex++]);

  // console.log(K, N);
  const dp = Array.from(Array(K + 1), () => Array(N).fill(0));
  for (let i = 1; i <= N; i++) {
    dp[0][i] = i;
  }
  // console.log(dp);

  for (let i = 1; i <= N; i++) {
    for (let k = 1; k <= K; k++) {
      dp[k][i] = dp[k][i - 1] + dp[k - 1][i];
    }
  }
  console.log(dp[K][N]);
}
