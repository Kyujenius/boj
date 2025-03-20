const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const array = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  array.push(line);
}

// 최대 높이 찾기
let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    maxHeight = Math.max(maxHeight, array[i][j]);
  }
}

// BFS 함수
function bfs(startX, startY, isSafe, isVisited) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  queue.push([startX, startY]);
  isVisited[startY][startX] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (isSafe[ny][nx] === 1 && !isVisited[ny][nx]) {
        queue.push([nx, ny]);
        isVisited[ny][nx] = true;
      }
    }
  }
}

let maxSafeZones = 1; // 비가 오지 않는 경우 안전 영역은 1개

// 각 비의 양(높이)에 대해 안전 영역 개수 계산
for (let rain = 1; rain <= maxHeight; rain++) {
  const isSafe = Array.from(Array(N), () => Array(N).fill(0));
  
  // 안전지대 표시 (비의 양보다 높은 지역)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (array[i][j] > rain) {
        isSafe[i][j] = 1;
      }
    }
  }
  
  const isVisited = Array.from(Array(N), () => Array(N).fill(false));
  let count = 0;
  
  // 안전 영역 개수 세기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (isSafe[i][j] === 1 && !isVisited[i][j]) {
        bfs(j, i, isSafe, isVisited);
        count++;
      }
    }
  }
  
  maxSafeZones = Math.max(maxSafeZones, count);
}

console.log(maxSafeZones);
