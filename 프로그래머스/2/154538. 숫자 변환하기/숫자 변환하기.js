function solution(x, y, n) {
    var answer = 0;
    const visited = new Set();
    const queue = [];
    queue.push([x,0]);
    let index = 0;
    while(index < queue.length) {
        const [input, count] = queue[index];
        if(input == y) return count;
        const newInput = [input+n, input*2, input*3];
        if(!visited.has(input) && input < y) {
            for(let i = 0 ; i<3; i++) {
                queue.push([newInput[i],count+1]);    
                visited.add(input);
            }
        }

        index++
        // console.log(queue);
    }
    return -1;
}