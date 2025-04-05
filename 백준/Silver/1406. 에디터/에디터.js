
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let str = input[0];
const M = parseInt(input[1]);
const commands = input.slice(2);

let leftStack = str.split("");
let rightStack = [];

for (let i = 0; i < M; i++) {
  const command = commands[i].split(" ");

  switch (command[0]) {
    case "L":
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
      break;
    case "D":
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
      break;
    case "B":
      if (leftStack.length > 0) {
        leftStack.pop();
      }
      break;
    case "P":
      leftStack.push(command[1]);
      break;
  }
}

console.log(leftStack.concat(rightStack.reverse()).join(""));
