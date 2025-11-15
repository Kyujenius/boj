function solution(scoville, K) {
    var answer = 0;
    const minHeap = new MinHeap();
    scoville.forEach((value) => minHeap.push(value));
    // console.log(minHeap.heap);
    if(minHeap.heap[0] >= K) return 0;
    while(true) {
        const a = minHeap.pop();
        const b = minHeap.pop();
        if(a == undefined || b == undefined) return -1;
        const newFood = a + b*2;
        minHeap.push(newFood);
        answer++;
        // console.log(minHeap.heap);
        if(minHeap.heap[0] >= K) {
            break;
        }

    }       
    return answer;
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
        if(this.heap.length == 0) return undefined;
        if(this.heap.length == 1) return this.heap.pop();
        const popped =this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return popped;
    }
    swap(a,b) {
        [this.heap[a],this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    bubbleUp() {
        let index = this.heap.length-1;
        let parentIdx = Math.floor((index-1)/2);
        
        while(index > 0 && this.heap[index] < this.heap[parentIdx]){
            this.swap(index,parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index-1)/2);
        }
    }
    bubbleDown() {
        let index = 0;
        let swapIdx = null;
        const lastIdx = this.heap.length -1;
        while(true) {
            let leftIdx = index *2 +1;
            let rightIdx = index *2 +2;
            let leftElement = this.heap[leftIdx];
            let rightElement = this.heap[rightIdx];
            let element = this.heap[index];
            if(lastIdx >= leftIdx) {
                if(leftElement < element) {
                    swapIdx = leftIdx;
                }
            }
            if(lastIdx >= rightIdx) {
                if((swapIdx !== null && rightElement < element && rightElement <leftElement )||
                   (swapIdx == null && rightElement < element)
                  ) {
                    swapIdx = rightIdx;
                }
            }
            if(swapIdx == null) {
                break;
            }
            this.swap(index, swapIdx);
            index = swapIdx;
            swapIdx = null;
        }
    }
}