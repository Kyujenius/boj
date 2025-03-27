const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

// 미리 DP 배열 계산
const fibonacci = bottomUpDP(40);

for (let i = 1; i <= N; i++) {
  const value = parseInt(input[i]);
  console.log(fibonacci[value].zero + " " + fibonacci[value].one);
}

function bottomUpDP(maxValue) {
  let array = new Array(maxValue + 1);

  // 기본 케이스 초기화
  array[0] = { zero: 1, one: 0 };
  array[1] = { zero: 0, one: 1 };

  // 나머지 케이스 계산
  for (let i = 2; i <= maxValue; i++) {
    array[i] = {
      zero: array[i - 1].zero + array[i - 2].zero,
      one: array[i - 1].one + array[i - 2].one,
    };
  }
  return array;
}
