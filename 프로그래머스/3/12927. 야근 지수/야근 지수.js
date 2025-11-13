function solution(n, works) {
    var answer = 0;
    
    const maxHeap = new MaxHeap();
    for(let i = 0 ; i<works.length; i++) {
        maxHeap.push(works[i]);
    }
    for(let i  =0; i<n; i++) {
        const popped = maxHeap.pop();
        if(popped == 0 || popped == undefined) {
            break;
        }else {
            maxHeap.push(popped-1);    
        }
        
    }
    
    // console.log(maxHeap.heap);
    maxHeap.heap.forEach((value) => {
            answer += value * value;    
    })
    return answer;

}

class MaxHeap {
    constructor() {
        this.heap =  [];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(input) {
        this.heap.push(input);
        this.bubbleUp();
    }
    pop() {
        if (this.heap.length === 0) {
            return undefined; 
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop(); 
        this.bubbleDown();
        return root;
    }
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        
        let parentIdx = Math.floor((index - 1) / 2); 
        
        while (index > 0 && this.heap[index] > this.heap[parentIdx]) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }
    }
    bubbleDown() {
        let index = 0;
        const lastIndex = this.heap.length - 1;
        const element = this.heap[0]; // 맨 위(루트) 요소

        while (true) {
            let leftIdx = index * 2 + 1;
            let rightIdx = index * 2 + 2;
            let leftChild, rightChild;
            let swapIdx = null; // 바꿀 대상의 인덱스

            // 왼쪽 자식 확인
            if (leftIdx <= lastIndex) {
                leftChild = this.heap[leftIdx];
                // 왼쪽 자식이 (현재) 요소보다 크면 바꿀 대상으로 지정
                if (leftChild > element) {
                    swapIdx = leftIdx;
                }
            }

            // 오른쪽 자식 확인
            if (rightIdx <= lastIndex) {
                rightChild = this.heap[rightIdx];
                
                // (바꿀 대상이 없었거나 || 오른쪽 자식이 왼쪽 자식보다 더 클 때)
                // && (오른쪽 자식이 요소보다 클 때)
                if (
                    (swapIdx === null && rightChild > element) ||
                    (swapIdx !== null && rightChild > leftChild)
                ) {
                    // 오른쪽 자식을 바꿀 대상으로 지정
                    swapIdx = rightIdx;
                }
            }

            // 바꿀 대상이 없으면 (현재 요소가 자식들보다 크면) 반복 종료
            if (swapIdx === null) break;

            // 바꿀 대상(더 큰 자식)과 현재 위치를 스왑
            this.swap(index, swapIdx);
            // 인덱스를 바뀐 위치로 업데이트하고 계속 진행
            index = swapIdx;
        }
    }
 
}


