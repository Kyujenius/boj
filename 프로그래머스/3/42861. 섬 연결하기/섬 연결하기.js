function solution(n, costs) {
    var answer = 0;
    const map = {};
    costs.forEach(([from,to,cost])=> {
        if(map[from] === undefined) {
            map[from] = [{to: to, cost:cost}];            
        }else{
            map[from].push({to: to, cost:cost});            
        }
        
        if(map[to] === undefined) {
            map[to] = [{to:from, cost: cost}];
        }else {
            map[to].push({to:from,cost:cost});
        }
    });
    
    const queue= [{to: 0, cost: 0}];
    const visited = Array(Object.keys(map).length).fill(false);
    // console.log(visited);
    while(queue.length > 0) {
        queue.sort((a,b)=>a.cost - b.cost);
        // console.log(queue);
        
        const {to: from, cost: currentCost} = queue.shift();
        if(visited[from]) continue;
        visited[from] = true;
        answer+= currentCost
        map[from].forEach(({to:to,cost:toCost})=> {
            if(!visited[to]) {
                queue.push({to:to,cost:toCost});
            }
        })
    }
    
    // console.log(map);
    
    return answer;
}