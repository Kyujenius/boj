function solution(n, works) {
    var answer = 0;
    const maxHeap = new MaxHeap();
    works.forEach((value) =>maxHeap.push(value));
    
    console.log(maxHeap.heap)
    
    for(let i = 0 ; i<n; i++) {
        let popped = maxHeap.pop();
        if(popped > 0) {
            maxHeap.push(popped -1);    
        }
        
    }
    
    console.log(maxHeap.heap)
    maxHeap.heap.forEach((value) => {
        answer += value * value;
    })
    
    
    return answer;
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    pop() {
        if(this.heap.length== 1) {
            return this.heap.pop();
        }
        if(this.heap.length== 0) {
            return undefined;
        }
        const popped = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return popped;
    }
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    bubbleUp () {
        let index = this.heap.length-1;
        let parentIdx = Math.floor((index-1)/2);
        while(index >0 && this.heap[index] > this.heap[parentIdx]){
            this.swap(index,parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index-1)/2);
        }
    }
    bubbleDown() {
        let index = 0;
        const lastIdx = this.heap.length-1;
        let swapIdx = null;
        while(true) {
            let leftIdx = index * 2 +1;
            let rightIdx = index * 2 + 2;
            if(lastIdx >= leftIdx) {
                if(this.heap[leftIdx] > this.heap[index]) {
                    swapIdx = leftIdx;
                }
            }
            if(lastIdx >= rightIdx) {
                if((swapIdx !== null && this.heap[rightIdx] > this.heap[leftIdx] && this.heap[rightIdx] > this.heap[index]) || (swapIdx == null && this.heap[rightIdx] > this.heap[index])) {
                    swapIdx = rightIdx;    
                }
            }
            if(swapIdx == null) break;
            this.swap(index,swapIdx);
            index = swapIdx;
            swapIdx = null;
        }
        
    }
    }
