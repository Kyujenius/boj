function solution(n, k, enemy) {
    var answer = 0;
    //enemy 만큼 순회하며 k개만큼 채울 MinHeap을 돌린다.
    const minHeap = new MinHeap();
    for(let i=0; i<enemy.length; i++) {
        minHeap.push(enemy[i]);
        if(minHeap.size() > k) {
            const popped = minHeap.pop();
            n -= popped;
        }
        if(n <0) {
            return i;
        }
        // console.log(minHeap, n );
    }
    
    return enemy.length;
}

//100만이니까 절대 O(n^2) 금지
class MinHeap{
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop(); // [수정 1] 요소가 1개일 때 바로 리턴
        const popped = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return popped;
    }
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b],this.heap[a]]
    }
    bubbleUp() {
        let lastIdx = this.heap.length -1;
        while(true) {
            let parentIdx = Math.ceil(lastIdx/2) -1;

            if(this.heap[lastIdx] < this.heap[parentIdx]) {
               this.swap(lastIdx,parentIdx);
                lastIdx = parentIdx;
            }else {
                break;
            }
        }
    }
    bubbleDown() {
        let index = 0;
        const lastIdx = this.heap.length;   
        while(index < lastIdx) {
            let leftIdx = index * 2 +1;
            let rightIdx = index * 2 +2;
            let swapIdx = null;
            if(leftIdx <= lastIdx && this.heap[leftIdx] < this.heap[index]) {
                swapIdx = leftIdx;
            }
            
            if((rightIdx <= lastIdx) &&
                     (this.heap[rightIdx] < this.heap[index]) &&
                     (this.heap[leftIdx] > this.heap[rightIdx])) {
                swapIdx = rightIdx;
            }
            
            if(swapIdx !== null) {
                this.swap(index,swapIdx);
                index = swapIdx;
            }else{
                break;
            }
        }
        
    }
    
    size() {
        return this.heap.length;
    }
    
}
