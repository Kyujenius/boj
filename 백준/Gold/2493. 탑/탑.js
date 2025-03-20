const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[1].split(' ').map(Number);
const n = arr.length;
const result = new Array(n).fill(0);
const stack = [];

for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
        stack.pop();
    }
    if (stack.length > 0) {
        result[i] = stack[stack.length - 1] + 1;
    }
    stack.push(i);
}

console.log(result.join(' '));

