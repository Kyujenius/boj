function solution(n, roads, sources, destination) {
    var answer = [];
    const map = {};
    roads.forEach(([from,to])=> {
        if(map[from] === undefined) {
            map[from] = [to]
        }else {
            map[from].push(to);
        }
        
        if(map[to] === undefined) {
            map[to] = [from];
        }else {
            map[to].push(from);
        }
    })
    
    
    
    const queue = [];
    queue.push(destination);
    
    const visited = Array(n+1).fill(false);
    const count =  Array(n+1).fill(-1);
    
    visited[destination] = true;
    count[destination] = 0;
    // console.log(map);
    // console.log(visited);

    while(queue.length>0) {
        const from = queue.shift();
        map[from].forEach((to) => {
            if(visited[to] === false) {
                queue.push(to);
                count[to] = count[from] +1;
                visited[to] = true;
            }
        })
    }
    // console.log(visited);
    // console.log(count);
    answer = sources.map((source)=> {
        return count[source];
    })
    return answer;
}