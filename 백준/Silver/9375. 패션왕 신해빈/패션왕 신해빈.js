
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
let lineIndex = 1;
let object = {};
for (let i = 0; i < T; i++) {
  const N = parseInt(input[lineIndex++]);
  for (let k = 0; k < N; k++) {
    const [wear, category] = input[lineIndex++].split(" ");

    if (object[category]) {
      object[category].push(wear);
    } else {
      object[category] = [wear];
    }
  }
  const values = Object.values(object);
  let valueLengths = [];
  //   console.log(values);
  values.forEach((value) => {
    const length = value.length;
    valueLengths.push(length + 1);
  });
  let result = 1;

  for (let i = 0; i < valueLengths.length; i++) {
    result = result * valueLengths[i];
  }
  result = result - 1;
  console.log(result);
  object = {};
}
