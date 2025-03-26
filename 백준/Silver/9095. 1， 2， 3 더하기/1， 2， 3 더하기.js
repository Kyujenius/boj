
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift();
const dp = new Array(11).fill(0);

// 초기값 설정
dp[1] = 1; // n=1일 때 방법의 수: [1]
dp[2] = 2; // n=2일 때 방법의 수: [1+1, 2]
dp[3] = 4; // n=3일 때 방법의 수: [1+1+1, 1+2, 2+1, 3]

// DP 점화식 계산
for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

// 입력된 숫자에 대해 결과 출력
input.forEach((num) => {
  console.log(dp[num]);
});
