const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const textInput = `
// 15
// push_back 1
// push_front 2
// front
// back
// size
// empty
// pop_front
// pop_back
// pop_front
// size
// empty
// pop_back
// push_front 3
// empty
// front
// `;

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
    return this.count;
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
    if (!temp) {
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

    if (!temp) {
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
  peekHead() {
    if (this.size() == 0) {
      return -1;
    }
    return this.head.data;
  }
  peekTail() {
    if (this.size() == 0) {
      return -1;
    }
    return this.tail.data;
  }
  peekDeque() {
    for (let i = 0; i < this.count; i++) {
      if (this.head.data !== undefined) {
        console.log(this.head.data);
        this.head = this.head.next;
      }
    }
  }
}

const lines = input;

const N = lines[0];
let fn = "";
let number = 0;
let deque = new Deque();
for (let i = 1; i <= N; i++) {
  fn = lines[i].split(" ")[0];
  number = lines[i].split(" ")[1];

  customfn(fn, number);
}

function customfn(fn, number) {
  if (fn == "push_front") {
    deque.addHead(number);
  }
  if (fn == "push_back") {
    deque.addTail(number);
  }
  if (fn == "pop_front") {
    console.log(deque.removeHead());
  }
  if (fn == "pop_back") {
    console.log(deque.removeTail());
  }
  if (fn == "size") {
    console.log(deque.size());
  }
  if (fn == "empty") {
    if (deque.size() == 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
  if (fn == "front") {
    console.log(deque.peekHead());
  }

  if (fn == "back") {
    console.log(deque.peekTail());
  }
}
