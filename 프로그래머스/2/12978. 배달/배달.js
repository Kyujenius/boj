function solution(N, road, K) {
    var answer = 0;
    const dist = Array(N+1).fill(Infinity);

    dist[1]= 0;

    const map = Array.from({length:N+1}, () => []);
    road.forEach(([from,to,distance])=> {
        map[from].push({to:to,distance:distance});
        map[to].push({to:from,distance:distance});
    })
    const queue = [{to:1,distance:0}];
    while(queue.length > 0) {
        queue.sort((a,b)=> a.distance - b.distance);
        const currentObj = queue.shift();
        const current = currentObj.to;
        const currentDistance = currentObj.distance;
        
        const nextArr = map[current];
        nextArr.forEach((nextObj)=> {
            const next = nextObj.to; // 갈 곳
            const nextDistance = nextObj.distance; // 가는 길에 필요한 거리
            const nextCost = currentDistance + nextDistance;
            if(dist[next] > nextCost) {
                dist[next] = nextCost;
                queue.push({to:next, distance: nextCost});
            }
        });
        // console.log(dist, queue);
    }
    
    return dist.filter((d) => d <= K).length;
    
    
    return answer;
}