
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const visited = Array.from(Array(N), () => Array(M).fill(false));

// console.log(visited);
const map = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split("").map(Number);
  map.push(line);
}
// console.log(map);

function bfs(startX, startY) {
  const queue = [];
  queue.push([startX, startY]);
  visited[startY][startX] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];
    // console.log("cx,cy:", cx, cy);
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      //   console.log(nx, ny);
      if (nx >= M || ny >= N || nx < 0 || ny < 0) {
        // console.log("예외");
        continue;
      }
      if (visited[ny][nx] == false && map[ny][nx] == 1) {
        map[ny][nx] = map[cy][cx] + 1;
        queue.push([nx, ny]);
        // console.log("queue추가", nx, ny);
      }
    }
  }
}
bfs(0, 0);
console.log(map[N - 1][M - 1]);
