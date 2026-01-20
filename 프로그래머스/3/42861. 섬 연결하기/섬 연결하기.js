function solution(n, costs) {
    var answer = 0;
    const map = {};
    costs.forEach(([from,to,cost])=> {
        if(map[from] === undefined) {
            map[from] = [{to: to,cost : cost}];
        }else {
            map[from].push({to:to,cost:cost});
        }
        
        if(map[to] === undefined) {
            map[to] = [{to: from, cost: cost}];
        }else {
            map[to].push({to:from,cost:cost});
        }
    })
    
    console.log(map);
    const queue = [{to:0,cost:0}];
    const visited = Array(costs.length).fill(false);
    while(queue.length > 0) {
        queue.sort((a,b)=>a.cost - b.cost);
        const {to: current,cost:currentCost}= queue.shift();
        // console.log(visited);
        if(visited[current]) continue;
        answer+= currentCost;
        visited[current] = true;
        
        map[current].forEach(({to:next,cost:nextCost})=> {
            if(!visited[next]) {
                
                queue.push({to:next,cost:nextCost});
            }    
        });
    }
    
    return answer;
}