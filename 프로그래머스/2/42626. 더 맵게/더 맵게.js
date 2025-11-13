function solution(scoville, K) {
    var answer = 0;
    const minHeap = new MinHeap();
    scoville.forEach((value) => minHeap.push(value));
    let count =0;
    while(true){
        const a = minHeap.pop();
        const b = minHeap.pop();
        if(a >= K) {
            return count;
        }
        if(a == undefined) {
            return -1;
        }
        if(b == undefined) {
            return -1;
        }
        const newFood = a + b*2;
        minHeap.push(newFood);
        count++;
        if(minHeap.heap[0] >= K) {
            break;
         }
    }
    return count;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    swap(a,b) {
        [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]];
    }
    push(input) {
        this.heap.push(input);
        this.bubbleUp();
    }
    pop() {
        if(this.heap.length ==1) {
            return this.heap.pop();
        }
        if(this.heap.length ==0) {
            return undefined;
        }
        const popped = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return popped;
    }
    bubbleUp() {
        let index = this.heap.length-1;
        
        let parentIdx = Math.floor((index-1)/2);
        while(this.heap[parentIdx] > this.heap[index]) {
            this.swap(parentIdx,index);
            index = parentIdx;
            parentIdx = Math.floor((index-1)/2);
        }
    }
    
    bubbleDown() {
        let index = 0;
        let lastIdx = this.heap.length-1;
        while(true) {
            let leftIdx = index *2 +1;
            let rightIdx = index *2 +2;
            let swapIdx = null;
            //왼쪽 존재할 때
            if(lastIdx >= leftIdx) {
                if(this.heap[leftIdx] < this.heap[index]) {
                    swapIdx = leftIdx;
                }
            }
            
            if(lastIdx >= rightIdx) {
                if(swapIdx !== null && this.heap[rightIdx] < this.heap[index] && this.heap[rightIdx] < this.heap[leftIdx]
                   || (swapIdx == null && this.heap[rightIdx] < this.heap[index])) {
                    //왼쪽이 없는 상황에, 부모보다 오른쪽이 더 작은 경우
                    //왼쪽이 있는데도, 둘이 비교했을 때 오른 쪽이 더 큰 경우
                    swapIdx = rightIdx;
                }
            }
            
            if(swapIdx == null) break; 
            this.swap(index, swapIdx);
            index = swapIdx;
        }
    }
}