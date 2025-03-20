
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.tmep = 0;
  }
  size() {
    if (this.queue[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  enqueue(value) {
    if (this.size() == 0) {
      this.queue[0] = value;
    } else {
      this.rear += 1;
      this.queue[this.rear] = value;
    }
  }

  dequeue() {
    if (this.front === this.rear) {
      this.temp = this.queue[this.front];
      delete this.queue[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      this.temp = this.queue[this.front];
      delete this.queue[this.front];
      this.front = this.front + 1;
    }
    return this.temp;
  }

  pop() {
    return this.queue.pop();
  }
}
const lines = input;
const N = lines[0];
const M = lines[3];
const isQueueArray = [...lines[1].split(" ").map((n) => Number(n))];
const inputArray = [...lines[4].split(" ").map((n) => Number(n))];
let currentArray = [...lines[2].split(" ").map((n) => Number(n))];
let resultArray = [];
let queue = new Queue();
for (i = N - 1; i >= 0; i--) {
  if (isQueueArray[i] == 0) {
    queue.enqueue(currentArray[i]);
  }
}

for (j = 0; j < M; j++) {
  queue.enqueue(inputArray[j]);

  resultArray.push(queue.dequeue());
}
console.log(resultArray.join(" "));
