class Queue {
  constructor() {
    this.queue = {};
    this.front = 0;
    this.rear = 0;
  }
  size() {
    return this.rear - this.front;
  }
  enqueue(value) {
    //비어있으면 추가
    this.queue[this.rear] = value;
    this.rear += 1;
  }
  dequeue() {
    if (this.front === this.rear) {
      return -1; // 큐가 비어있을 때
    }

    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;

    // 큐가 비어있으면 front와 rear 초기화 (선택적)
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return value;
  }
  peekFront() {
    if (this.size() == 0) {
      return -1;
    } else {
      return this.queue[this.front];
    }
  }
  peekBack() {
    if (this.size() == 0) {
      return -1;
    } else {
      return this.queue[this.rear - 1];
    }
  }
  empty() {
    if (this.size() == 0) {
      return 1;
    } else {
      return 0;
    }
  }
}

// const textInput = `15
// push 1
// push 2
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front`;

// const input = textInput.toString().trim().split("\n");

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = parseInt(input[0]);
let queue = new Queue();
let answer = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  const func = line[0];
  const number = line[1];
  const result = customFunction(func, number);
  if (result !== null) {
    answer.push(result);
  }
}
console.log(answer.join("\n"));

function customFunction(func, number) {
  switch (func) {
    case "push":
      queue.enqueue(number);
      return null;
    case "pop":
      return queue.dequeue();
    case "size":
      return queue.size();
    case "empty":
      return queue.empty();
    case "front":
      return queue.peekFront();
    case "back":
      return queue.peekBack();
  }
}
