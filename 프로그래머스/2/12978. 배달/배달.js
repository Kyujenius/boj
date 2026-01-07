function solution(N, road, K) {
    var answer = 0;

    const dist = Array(N+1).fill(Infinity);
    const map = Array.from({length: N+1},()=>  [])
    // console.log(dist);
    
    road.forEach(([from,to,cost])=>{
        map[from].push({to : to,cost : cost});
        map[to].push({to: from,cost : cost});
    })
    // console.log(map);
    
    dist[1] = 0;
    const queue = [{to:1, cost:0}];
    
    while(queue.length>0) {
        
        //먼저 정렬 다익스트라니까
        queue.sort((a,b)=>{
            return a.cost- b.cost
        });
        const cur = queue.shift();
        const current = cur.to;
        const currentCost = cur.cost;
        // console.log(current,currentCost);
        map[current].forEach((next) => {
            const finalCost = currentCost + next.cost;
            if(finalCost < dist[next.to]) {
                dist[next.to] = finalCost; 
                queue.push({to: next.to, cost:finalCost});
            }
        })
    }
    
    dist.forEach((value)=> {
        if(value <=K) {
            answer++;
        }
    })
    
    
    
    return answer;
}