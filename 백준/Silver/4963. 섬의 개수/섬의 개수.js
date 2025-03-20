
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = textInput.toString().trim().split("\n");
let lineIndex = 0;

while (true) {
  const [w, h] = input[lineIndex++].split(" ").map(Number);

  if (w === 0 && h === 0) break;

  const map = [];

  for (let i = 0; i < h; i++) {
    const line = input[lineIndex++].split(" ").map(Number);
    map.push(line);
  }
  // console.log(map);

  // BFS나 DFS로 섬의 개수 세기
  const visited = Array.from(Array(h), () => Array(w).fill(false));
  let count = 0;

  function bfs(x, y) {
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
    const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

    const queue = [];
    queue.push([x, y]);
    visited[y][x] = true;

    while (queue.length) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 8; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < w &&
          ny < h &&
          map[ny][nx] == 1 &&
          !visited[ny][nx]
        ) {
          visited[ny][nx] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j] && map[i][j] == 1) {
        bfs(j, i);
        count++;
      }
    }
  }

  console.log(count);
}
