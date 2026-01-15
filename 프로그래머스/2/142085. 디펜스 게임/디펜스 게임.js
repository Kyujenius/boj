function solution(n, k, enemy) {
    var answer = 0;
    
    const minHeap = new MinHeap();
    
    for(let i =0; i<enemy.length; i++) {
        // console.log(minHeap);
        minHeap.push(enemy[i]);
        if(minHeap.size() > k) {
            n -= minHeap.pop();
            if(n < 0){
                return i;
            }
        }
    }
    
    return enemy.length;
}


class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        if(this.heap.length === 0) return undefined;
        if(this.heap.length === 1) return this.heap.pop();
        const popped = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return popped;
    }
    size () {
        return this.heap.length;
    }
    swap(a,b) {
        [this.heap[a],this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    bubbleUp() {
        let index = this.heap.length-1;
        while(true) {
            let parentIdx = Math.ceil(index/2)-1;
            if(this.heap[parentIdx] > this.heap[index]) {
                this.swap(parentIdx,index);
                index = parentIdx;
            }else {
                break;
            }
        }
    }
    
    bubbleDown() {
        let index = 0;
        const lastIdx = this.heap.length-1;
        while(true) {
            let leftIdx = index * 2 +1;
            let rightIdx = index * 2 +2;
            let smallestIdx = index;
            if(leftIdx <= lastIdx && this.heap[leftIdx] < this.heap[index]) {
                smallestIdx = leftIdx;
            }
            
            if(rightIdx <= lastIdx && this.heap[leftIdx] > this.heap[rightIdx] && this.heap[rightIdx] < this.heap[index]) {
                smallestIdx = rightIdx;
            }
            
            if(smallestIdx === index) {
                break;
            }else {
                this.swap(index, smallestIdx);
                index = smallestIdx;
            }
        }
    }
}