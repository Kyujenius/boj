const fs = require("fs");

const lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let lineIndex = 0;

// 테스트 케이스 개수 읽기
const T = parseInt(lines[lineIndex++]); // lineIndex:1

for (let t = 0; t < T; t++) {
  // M, N, P 읽기
  const [M, N, P] = lines[lineIndex++].split(" ").map(Number); // lineIndex:2

  //M,N 배추밭 0으로 채우기
  const array = Array.from(Array(N), () => Array(M).fill(0));

  //visited 다 false로 채우기
  const visited = Array.from(Array(N), () => Array(M).fill(false));

  // P개의 좌표 읽어서 배추밭에 배추 있는 곳 1 채우기
  for (let i = 0; i < P; i++) {
    const [x, y] = lines[lineIndex++].split(" ").map(Number);
    array[y][x] = 1;
  } //lineIndex : 2+ P

  //배추 있나 탐색할 범위 (dx와 dy를 동시에 넣어주기에, 안 겹치게 해야함)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs(startX, startY) {
    const queue = [];

    //큐에다가 x,y 배추 위치 넣기
    queue.push([startY, startX]);

    //방문했다고 적어두기
    visited[startY][startX] = true;

    while (queue.length > 0) {
      const [y, x] = queue.shift();
      //상 하 좌 우 탐색하기

      for (let i = 0; i < 4; i++) {
        // 이미 이동한 위치
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 범위를 벗어나면 건너뛰기
        if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;

        if (array[ny][nx] == 1 && !visited[ny][nx]) {
          queue.push([ny, nx]);
          visited[ny][nx] = true;
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (array[j][i] === 1 && !visited[j][i]) {
        bfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}
