function solution(x, y, n) {
    const queue = [[x,0]];
    const visited = new Set();
    visited.add(x);
    let queueIdx = 0;
    while(queueIdx < queue.length) {
        const [current, count] = queue[queueIdx];
        
        if(current === y) {
            return count;
        }
        
        const x3 = current * 3;
        const x2 = current * 2;
        const plusN = current +n;
        
        
        if(plusN === y) return count+1;
        if(plusN < y && !visited.has(plusN)) {
            queue.push([plusN,count+1]);
            visited.add(plusN);
        }
     
        if(x2 === y) return count+1;
        if(x2 < y && !visited.has(x2)) {
            queue.push([x2,count+1]);
            visited.add(x2);
        }
        
        if(x3 === y) return count+1;
        if(x3 < y && !visited.has(x3)) {
            queue.push([x3,count+1]);
            visited.add(x3);
        }   
        queueIdx++;
    }
    return -1;
}