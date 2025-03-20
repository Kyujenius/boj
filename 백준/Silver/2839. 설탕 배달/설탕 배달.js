const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()

// const input = "9";

const N = Number(input);

let answer = -1;
let fiveCount = Math.floor(N / 5);

while (fiveCount >= 0) {
  const remaining = N - fiveCount * 5;

  if (remaining % 3 === 0) {
    const threeCount = remaining / 3;
    answer = fiveCount + threeCount;
    break;
  }

  fiveCount--;
}

console.log(answer);
