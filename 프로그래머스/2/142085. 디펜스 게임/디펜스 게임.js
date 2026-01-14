function solution(n, k, enemy) {
    var answer = 0;
    const heap = new MinHeap();

    for(let i = 0 ; i<enemy.length; i++) {
        // console.log(heap)
        //k랑 같으면 빼버리기
        heap.push(enemy[i]);   
        if(heap.size() > k) {
            n -= heap.pop();
        }
          if(n < 0) {
             return i;    
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
    
    pop(){
        if(this.heap.length === 0) return undefined;
        if(this.heap.length === 1) return this.heap.pop();
        const popped = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return popped;
    }
    
    swap (a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    bubbleUp() {
        let lastIdx = this.heap.length-1;
        while(true) {
            let parentIdx = Math.ceil(lastIdx /2) -1;
            if(this.heap[lastIdx] < this.heap[parentIdx]) {
                this.swap(lastIdx, parentIdx);
                lastIdx = parentIdx;
            }else {
                break;
            }
        }
    }
    
    bubbleDown() {
        let index = 0;
        while(true) {
            let leftIdx = index * 2 +1;
            let rightIdx = index * 2 + 2;
            const lastIdx = this.heap.length-1;
            let smallestIdx = index;
            
            if((leftIdx <= lastIdx) &&
               this.heap[leftIdx] < this.heap[smallestIdx]) {
                smallestIdx = leftIdx;
            }
            
            if(rightIdx <= lastIdx && this.heap[rightIdx] < this.heap[smallestIdx]) {
                smallestIdx = rightIdx;
            }
            
            if(smallestIdx === index)  break;
            
            this.swap(index, smallestIdx);
            index = smallestIdx;
            
        }
    }
    size() {
        return this.heap.length;
    }
}