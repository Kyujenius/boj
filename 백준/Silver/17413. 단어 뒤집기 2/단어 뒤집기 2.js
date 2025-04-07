class Queue {
  constructor() {
    this.array = {};
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  enqueue(value) {
    if (this.size == 0) {
      this.array[this.rear] = value;
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
      this.array = {};
      this.front = 0;
      this.rear = 0;
      this.size--;
      return temp;
    } else {
      const temp = this.array[this.front];
      delete this.array[this.front];
      this.front++;
      this.size--;
      return temp;
    }
  }
  pickFront() {
    return this.array[this.front];
  }
  pickRear() {
    return this.array[this.rear];
  }
}
// const textInput = `baekjoon online judge`;
// const input = textInput.toString().trim();

const fs = require("fs");
// 수정: 줄바꿈으로 분할하지 않고 문자열 그대로 사용
const input = fs.readFileSync("/dev/stdin").toString().trim();

let queue = new Queue();

// 수정: 문자열을 문자 단위로 분할하여 큐에 넣음
const array = input.split("");
for (let i = 0; i < array.length; i++) {
  queue.enqueue(array[i]);
}

let defaultArray = [];
let reverseArray = [];
let resultArray = [];
// console.log(queue);

while (queue.size > 0) {
  const dequeued = queue.dequeue();
  //   console.log(dequeued);

  if (dequeued === "<") {
    defaultArray.push("<");
    while (true) {
      const dequeuedMore = queue.dequeue();
      defaultArray.push(dequeuedMore);
      if (dequeuedMore === ">") {
        break;
      }
    }
    // console.log(defaultArray);
    resultArray.push(defaultArray.join(""));
    defaultArray = [];
  } else if (dequeued === " ") {
    // 수정: 공백 문자를 직접 처리
    resultArray.push(" ");
  } else {
    reverseArray.push(dequeued);
    while (queue.size > 0) {
      const dequeuedMore = queue.pickFront();
      if (dequeuedMore === "<" || dequeuedMore === " " || queue.size === 0) {
        break;
      } else {
        const dequeuedNum = queue.dequeue();
        reverseArray.push(dequeuedNum);
      }
    }
    // console.log(reverseArray);
    resultArray.push(reverseArray.reverse().join(""));
    reverseArray = [];
  }
}

console.log(resultArray.join(""));
