
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
let meetings = [];

// 회의 시간 정보 저장
for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  meetings.push([start, end]);
}

// 종료 시간 기준으로 정렬, 종료 시간이 같으면 시작 시간 기준으로 정렬
meetings.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 0;
let endTime = 0;

// 그리디 알고리즘 적용
for (let i = 0; i < N; i++) {
  if (meetings[i][0] >= endTime) {
    // 현재 회의 시작 시간이 이전 회의 종료 시간 이후라면
    count++;
    endTime = meetings[i][1];
  }
}

console.log(count);
