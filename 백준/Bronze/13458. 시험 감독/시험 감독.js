const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const array = input[1].split(" ").map(Number);
// console.log(array);
const [B, C] = input[2].split(" ").map(Number);
const length = array.length;
let count = 0;
for (let i = 0; i < length; i++) {
  let number = array[i];
  count++;
  const newNumber = number - B;
  if (newNumber > 0) {
    const plus = Math.ceil(newNumber / C);
    // console.log(`plus ${plus}`);
    count += plus;
  }
}

console.log(count);