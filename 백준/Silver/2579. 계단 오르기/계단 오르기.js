
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

const stair = [0];

for (let i = 1; i <= N; i++) {
  stair.push(parseInt(input[i]));
}

// console.log(stair);
// console.log(dp);

function bottomUp(value) {
  const dp = Array(N + 1).fill(0);
  dp[1] = stair[1];
  dp[2] = stair[1] + stair[2];
  dp[3] = Math.max(stair[1] + stair[3], stair[2] + stair[3]);

  if (value == 1) {
    return stair[1];
  } else if (value == 2) {
    return stair[1] + stair[2];
  } else if (value == 3) {
    return dp[3];
  } else {
    for (let i = 4; i <= value; i++) {
      // 2칸 전에 온 놈 vs 1칸 전, 2칸 전에 온 놈
      dp[i] = Math.max(
        stair[i] + dp[i - 2],
        stair[i] + stair[i - 1] + dp[i - 3]
      );

    }
    return dp[value];
  }
}

console.log(bottomUp(N));
