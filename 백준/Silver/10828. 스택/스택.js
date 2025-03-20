
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const array = [];
let answer = "";
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  const func = line[0];
  const number = line[1];
  const result = customFunction(func, number);
  if (result !== null) {
    answer += result + "\n";
  }
}
console.log(answer.trim());

function customFunction(func, number) {
  switch (func) {
    case "push":
      array.push(number);
      return null;
    case "size":
      return array.length;
    case "pop":
      if (array.length == 0) {
        return -1;
      } else {
        return array.pop();
      }
    case "empty":
      if (array.length == 0) {
        return 1;
      } else {
        return 0;
      }
    case "top":
      if (array.length == 0) {
        return -1;
      } else {
        return array[array.length - 1];
      }
  }
}
