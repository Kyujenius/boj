function solution(x, y, n) {
    var answer = 0;
    const visited = new Set();
    const queue = [];
    
    queue.push([x,0]);
    let queueIdx = 0;
    while(queueIdx < queue.length) {
        const [number, count] = queue[queueIdx];
        if(number === y) return count;
        const newNumber = [number+n, number*2, number*3];
        for(let i = 0 ; i <3; i++) {
            if(!visited.has(newNumber[i]) && newNumber[i] <= y) {
                queue.push([newNumber[i],count+1]);
                visited.add(newNumber[i]);
            }
        }
        // console.log(queue)
        queueIdx++;
    }
    return -1;
}