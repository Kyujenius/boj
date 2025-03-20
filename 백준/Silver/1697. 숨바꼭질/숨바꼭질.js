
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const numbers = input[0].split(" ");

function bfs(start, target) {
  const visited = new Array(100001).fill(false); // 0~100,000 범위 방문 체크
  const queue = [[start, 0]]; // [위치, 시간]
  visited[start] = true;

  while (queue.length > 0) {
    const [position, time] = queue.shift();

    if (position === target) {
      return time;
    }

    // 세 가지 이동 방법
    const nextPositions = [position - 1, position + 1, position * 2];

    for (const next of nextPositions) {
      // 범위 내에 있고 아직 방문하지 않은 경우만 큐에 추가
      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(Number(numbers[0]), Number(numbers[1])));
