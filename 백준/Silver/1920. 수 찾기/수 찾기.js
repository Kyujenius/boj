// const textInput = `5
// 4 1 5 2 3
// 5
// 1 3 7 9 5`;

// const input = textInput.toString().trim().split("\n");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const original = input[1].split(" ").map(Number);
const M = input[2];
const compareArray = input[3].split(" ").map(Number);

original.sort((a, b) => a - b);

// console.log(original);
// console.log(compareArray);

// N * M 하면 10^9 라 안됩니다. 10초가 나와버려요

for (let k = 0; k < M; k++) {
  const compareNumber = compareArray[k];
  console.log(binarySearch(original, compareNumber));
}

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}
