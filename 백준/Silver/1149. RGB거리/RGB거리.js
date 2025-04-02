
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const N = parseInt(input[0]);
const cost = [];
const dp = Array.from(Array(N), () => Array(3).fill(Infinity));
for (let i = 1; i <= N; i++) {
  cost.push(input[i].split(" ").map(Number));
}

// console.log(cost);
dp[0] = cost[0];
// console.log(dp);

for (let i = 2; i <= N; i++) {
  //빨강 최적해
  dp[i - 1][0] = Math.min(dp[i - 2][1], dp[i - 2][2]) + cost[i - 1][0];
  //초록 최적해
  dp[i - 1][1] = Math.min(dp[i - 2][0], dp[i - 2][2]) + cost[i - 1][1];
  //피랑 최적해
  dp[i - 1][2] = Math.min(dp[i - 2][0], dp[i - 2][1]) + cost[i - 1][2];
}
console.log(Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]));
