
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);

const box = [];
const queue = [];

for (let i = 1; i <= N; i++) {
  box.push(input[i].split(" ").map(Number));
}

// console.log(box);

function sollution() {
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < M; k++) {
      if (box[i][k] == 1) {
        queue.push([k, i]);
      }
    }
  }

  // console.log(queue);

  let queueIndex = 0;
  while (queueIndex < queue.length) {
    const [cx, cy] = queue[queueIndex++];
    const dx = [-1, 0, 0, 1];
    const dy = [0, -1, 1, 0];
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + cx;
      const ny = dy[i] + cy;
      // 좌표에서 벗어나거나, 이미 익었으면 pass
      if (nx < 0 || ny < 0 || nx >= M || ny >= N || box[ny][nx] !== 0) continue;

      // 안 벗어났는데, 옮겼을 때 값이 0 이면, 전파 가능!
      if (box[ny][nx] == 0) {
        queue.push([nx, ny]);
        box[ny][nx] = box[cy][cx] + 1;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < M; k++) {
      if (box[i][k] == 0) {
        return -1;
      } else {
        result = Math.max(result, box[i][k]);
      }
    }
  }

  return result - 1;
}
const answer = sollution();
console.log(answer);
