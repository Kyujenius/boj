function solution(n, edge) {
    var answer = 0;
    const map = {};
    const road = edge.forEach(([from,to])=> {
        if(map[from] == undefined) {
            map[from] = [to];
        }else {
            map[from].push(to);
        }
        
        if(map[to] == undefined) {
            map[to] = [from]
        }else {
            map[to].push(from);
        }
    })    
    
    // console.log(map);
    const queue = [[1,0]];
    let maxCount = 0;
    let maxNumber = 0;
    const visited = Array(Object.keys(map).length+1).fill(false);
    
    visited[1] = true;
    
    // console.log(visited);
    const maxArr = [];
    while(queue.length >0) {
        const [from,count] = queue.shift();
        if(count > maxNumber) {
            maxNumber = count;
            maxCount = 1;
        }else if(count == maxNumber){
            maxCount++;    
        }
        
        
        map[from].forEach((to)=> {
            if(!visited[to]) {
                queue.push([to,count+1]);
                visited[to] = true;
            }
        })
        // console.log(queue)
    }
    
    return maxCount;
}


// 1. bfs로도 그냥 노드 visited, count 로 관리해도 될 듯, 



// 2. 다익스트라로 하고 다 거리를 1로 해도 되지 않을까?