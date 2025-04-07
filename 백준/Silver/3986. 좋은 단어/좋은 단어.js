class Queue {
  constructor() {
    this.array = {};
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    if (this.size == 0) {
      this.array[0] = value;
    } else {
      this.rear++;
      this.array[this.rear] = value;
    }
    this.size++;
  }
  dequeue() {
    if (this.size == 0) {
      return;
    } else if (this.size == 1) {
      const temp = this.array[this.front];
      delete this.array[this.front];
      this.size = 0;
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      const temp = this.array[this.front];
      delete this.array[this.front];
      this.front++;
      this.size--;
      return temp;
    }
  }
}
// const textInput = `3
// ABAB
// AABB
// ABBA`;
// const input = textInput.toString().trim().split("\n");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

let stack = [];
let count = 0;
for (let i = 1; i <= N; i++) {
  const array = input[i].split("");
  //배열에 있는 걸 Queue로 옮겨버리기
  let queue = new Queue();
  for (let k = 0; k < array.length; k++) {
    queue.enqueue(array[k]);
  }
  //큐에서 하나씩 dequeue 하면서 다시 스택에 넣기
  let stack = [];
  for (let k = 0; k < array.length; k++) {
    const dequeued = queue.dequeue();
    // console.log(stack);

    if (stack[stack.length - 1] == dequeued) {
      stack.pop();
    } else {
      //   console.log(dequeued);
      stack.push(dequeued);
    }
  }
  if (stack.length == 0) {
    count++;
  }
}
console.log(count);
