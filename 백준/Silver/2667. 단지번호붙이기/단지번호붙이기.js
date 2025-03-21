
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const array = [];
const visited = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 1; i <= N; i++) {
  const line = input[i].split("").map(Number);
  array.push(line);
}

// console.log(array);
// console.log(visited);
function bfs(startX, startY) {
  const queue = [];
  let count = 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  queue.push([startX, startY]);
  visited[startY][startX] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (array[ny][nx] == 1 && !visited[ny][nx]) {
        queue.push([nx, ny]);
        visited[ny][nx] = true;
        ++count;
      }
    }
  }

  return count;
}

let resultArray = [];
let resultCount = 0;

for (let i = 0; i < N; i++) {
  for (let k = 0; k < N; k++) {
    if (array[i][k] && !visited[i][k]) {
      resultCount++;
      resultArray.push(bfs(k, i));
    }
  }
}

resultArray.sort((a, b) => a - b);

console.log(resultCount);
console.log(resultArray.join("\n"));
