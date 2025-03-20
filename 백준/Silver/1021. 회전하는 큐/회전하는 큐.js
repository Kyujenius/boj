
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  size() {
    if (this.head !== null) {
      return this.count;
    } else {
      return 0;
    }
  }
  addHead(value) {
    const node = new Node(value);
    if (this.size() == 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.count++;
  }

  addTail(value) {
    const node = new Node(value);
    if (this.size() == 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  removeHead() {
    const temp = this.head;
    if (this.size() == 0) {
      return -1;
    } else if (this.size() == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.count--;
    return temp.data;
  }
  removeTail() {
    const temp = this.tail;
    if (this.size() == 0) {
      return -1;
    } else if (this.size() == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.count--;
    return temp.data;
  }
  clone() {
    const newDeque = new Deque();

    // 원본 데크가 비어있으면 빈 데크 반환
    if (this.size() === 0) {
      return newDeque;
    }

    // 현재 데크의 모든 노드를 순회하며 새 데크에 복사
    let current = this.head;
    while (current !== null) {
      newDeque.addTail(current.data); // 순서대로 tail에 추가
      current = current.next;
    }

    return newDeque;
  }
}

const N = input[0].split(" ")[0];
const M = input[0].split(" ")[1];
// console.log(N, M);
const array = input[1].split(" ");
let deque = new Deque();
// console.log(array);

for (let i = 1; i <= N; i++) {
  deque.addTail(i);
}

function shiftRight(deque) {
  const tempTail = deque.removeTail();
  deque.addHead(tempTail);
}

function shiftLeft(deque) {
  const tempHead = deque.removeHead();
  deque.addTail(tempHead);
}

function findCount(deque, findingNumber) {
  let leftTempDeque = deque.clone();
  let rightTempDeque = deque.clone();
  let leftCount = 0;
  let rightCount = 0;
  for (let i = 0; i < leftTempDeque.count; i++) {
    if (findingNumber == leftTempDeque.head.data) {
      break;
    }
    shiftLeft(leftTempDeque);
    // console.log(`leftDeque`, leftTempDeque);
    leftCount++;
  }

  for (let i = 0; i < rightTempDeque.count; i++) {
    if (findingNumber == rightTempDeque.head.data) {
      break;
    }
    shiftRight(rightTempDeque);
    // console.log(`rightDeque`, rightTempDeque);
    rightCount++;
  }

  // console.log(`leftCount, rightCount: ${leftCount},${rightCount}`);

  if (leftCount <= rightCount) {
    return { way: "left", count: leftCount };
  } else {
    return { way: "right", count: rightCount };
  }
}

// console.log(deque);
let resultCount = 0;

for (let i = 0; i < M; i++) {
  if (findCount(deque, array[i])["way"] == "left") {
    const count = findCount(deque, array[i])["count"];
    for (let j = 0; j < count; j++) {
      shiftLeft(deque);
    }
    resultCount += count;
  }
  if (findCount(deque, array[i])["way"] == "right") {
    const count = findCount(deque, array[i])["count"];
    for (let j = 0; j < count; j++) {
      shiftRight(deque);
    }
    resultCount += count;
  }
  deque.removeHead();
}
console.log(resultCount);
