const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const array = [];
for (let i = 1; i <= N; i++) {
  const number = Number(input[i]);
  if (number == 0) {
    array.pop();
  } else {
    array.push(number);
  }
}
let count = 0;
for (let i = 0; i < array.length; i++) {
  count += array[i];
}

console.log(count);
