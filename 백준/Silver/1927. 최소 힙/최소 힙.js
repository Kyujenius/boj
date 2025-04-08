class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  dequeue() {
    if (this.isEmpty()) return 0;
    
    const min = this.heap[0];
    const end = this.heap.pop();
    
    if (this.size() > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    
    return min;
  }

  bubbleUp() {
    let index = this.size() - 1;
    const element = this.heap[index];
    
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      
      if (element >= parent) break;
      
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.size();
    const element = this.heap[0];
    
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }
      
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      
      if (swap === null) break;
      
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

// 입출력 최적화
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const heap = new MinHeap();
let result = [];

for (let i = 1; i <= N; i++) {
  const command = parseInt(input[i]);
  
  if (command === 0) {
    result.push(heap.dequeue());
  } else {
    heap.enqueue(command);
  }
}

console.log(result.join('\n'));
