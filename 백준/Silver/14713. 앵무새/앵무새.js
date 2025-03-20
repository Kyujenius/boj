const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input = `3
// i want to see you
// next week
// good luck
// i want next good luck week to see you`;

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const value = this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.queue[this.front];
  }
}

const lines = input;
const N = parseInt(lines[0]);
const queueArray = [];

// 각 앵무새의 문장을 큐에 저장
for (let i = 0; i < N; i++) {
  const sentence = lines[i + 1].split(" ");
  const queue = new Queue();

  for (let word of sentence) {
    queue.enqueue(word);
  }

  queueArray.push(queue);
}

// 섞인 문장
const mixedSentence = lines[N + 1].split(" ");
let possible = true;

// 섞인 문장의 각 단어에 대해
for (let word of mixedSentence) {
  let found = false;

  // 각 앵무새의 큐를 확인
  for (let i = 0; i < N; i++) {
    if (!queueArray[i].isEmpty() && queueArray[i].peek() === word) {
      queueArray[i].dequeue();
      found = true;
      break;
    }
  }

  // 어떤 앵무새의 큐에서도 현재 단어를 찾지 못했다면 불가능
  if (!found) {
    possible = false;
    break;
  }
}

// 모든 앵무새의 큐가 비어있는지 확인
for (let i = 0; i < N; i++) {
  if (!queueArray[i].isEmpty()) {
    possible = false;
    break;
  }
}

console.log(possible ? "Possible" : "Impossible");
