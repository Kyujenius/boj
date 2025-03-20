const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIndex(idx) {
    return idx * 2 + 1;
  }

  getRightChildIndex(idx) {
    return idx * 2 + 2;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;
    
    const min = this.heap[0];
    const last = this.heap.pop();
    
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    
    return min;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  heapifyUp() {
    let currentIdx = this.heap.length - 1;
    
    while (currentIdx > 0) {
      const parentIdx = this.getParentIndex(currentIdx);
      
      if (this.heap[parentIdx] <= this.heap[currentIdx]) break;
      
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
    }
  }

  heapifyDown() {
    let currentIdx = 0;
    const length = this.heap.length;
    
    while (true) {
      let smallest = currentIdx;
      const leftIdx = this.getLeftChildIndex(currentIdx);
      const rightIdx = this.getRightChildIndex(currentIdx);
      
      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }
      
      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }
      
      if (smallest === currentIdx) break;
      
      this.swap(currentIdx, smallest);
      currentIdx = smallest;
    }
  }
}

// 문제 해결 로직
const N = parseInt(input[0]);
const lectures = [];

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  lectures.push([start, end]);
}

// 시작 시간 기준으로 정렬
lectures.sort((a, b) => a[0] - b[0]);

// 최소 힙 생성 (종료 시간을 저장)
const minHeap = new MinHeap();

for (const [start, end] of lectures) {
  // 현재 강의 시작 시간이 가장 빨리 끝나는 강의실의 종료 시간보다 크거나 같으면
  if (!minHeap.isEmpty() && start >= minHeap.peek()) {
    // 강의실 재사용 (가장 빨리 끝나는 강의실)
    minHeap.pop();
  }
  
  // 현재 강의의 종료 시간을 힙에 추가
  minHeap.push(end);
}

// 필요한 강의실 수 출력
console.log(minHeap.size());
