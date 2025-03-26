const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

function bottomUpDP(number) {
  const dp = Array(1000 + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= number; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
  return dp[number] % 10007;
}

console.log(bottomUpDP(N));
