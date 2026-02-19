function solution(n, k, enemy) {
    var answer = enemy.length;
    const prq = new MinHeap(k);
    console.log(prq);
    for(let i = 0 ; i < enemy.length; i++) {
        const value = enemy[i];
        const index = i;
        // console.log(`---------${index}-------`);
        // console.log(prq);
        if(prq.queue[0] < value) {
            const lightEnemy = prq.shift();
            prq.push(value);
            n -= lightEnemy;
        }else {
            n -= value;
        }
        if(n < 0) {
            answer = index
            // console.log('리턴해!')
            return answer;
        }
    }
    return answer;
}

class MinHeap {
    constructor(n) {
        this.queue = Array(n).fill(0);
    }
    
    push(value) {
        this.queue.push(value);
        this.bubbleUp();
        // console.log(this.queue);
    }
    shift() {
        if(this.queue.length ===0) return undefined;
        if(this.queue.length ===1) return this.queue.pop();
        
        const popped = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.bubbleDown();
        // console.log(this.queue);
        return popped;
    }
    swap(a,b) {
        [this.queue[a], this.queue[b]] = [this.queue[b],this.queue[a]];
    }
    
    bubbleUp() {
        let idx = this.queue.length-1;
        let rootIdx = Math.floor((idx-1)/2);
        while(this.queue[idx] < this.queue[rootIdx]) {
            this.swap(idx,rootIdx);
            idx = rootIdx
            rootIdx = Math.floor((idx-1)/2);
        }
    }
    
    bubbleDown() {
        const length = this.queue.length;
        let idx = 0;
        let leftIdx = idx * 2 +1;
        let rightIdx = idx * 2 +2;
        let swapIdx = null;
        while(true) {
            //왼쪽 요소가 살아있고, 
            if(length >= leftIdx && this.queue[leftIdx] < this.queue[idx]) {
                swapIdx = leftIdx;
            }
            if(length >= rightIdx && this.queue[leftIdx] > this.queue[rightIdx] && this.queue[rightIdx] < this.queue[idx]) {
                swapIdx = rightIdx;
            }
            
            if(swapIdx === null) break;
            
            this.swap(swapIdx,idx);
            idx = swapIdx;
            leftIdx = idx * 2 +1;
            rightIdx = idx * 2 +2;
            swapIdx = null;
        }
    }
    
}