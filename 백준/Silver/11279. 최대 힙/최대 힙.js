class MaxHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  dequeue() {
    if (this.size() == 0) {
      return 0;
    } else if (this.size() == 1) {
      const element = this.heap.pop();
      return element;
    }
    const element = this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = element;
    this.bubbleDown();
    return max;
  }
  bubbleUp() {
    const length = this.size();
    let index = length - 1;

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);

      const element = this.heap[index];
      const parentElement = this.heap[parentIndex];

      if (element > parentElement) {
        this.heap[index] = parentElement;
        this.heap[parentIndex] = element;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;

      let leftChild, rightChild;
      let swap = null;
      const parentElement = this.heap[index];

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > parentElement) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap == null && rightChild > parentElement) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap == null) {
        break;
      }

      this.heap[index] = this.heap[swap];
      this.heap[swap] = parentElement;
      index = swap;
    }
  }
}


const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

const maxHeap = new MaxHeap();
let result = [];
for (let i = 1; i <= N; i++) {
  const value = parseInt(input[i]);
  if (value == 0) {
    result.push(maxHeap.dequeue());
  } else {
    maxHeap.enqueue(value);
  }
  // console.log(maxHeap);
}

console.log(result.join("\n"));
