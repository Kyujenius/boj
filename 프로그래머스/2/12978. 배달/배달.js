function solution(N, road, K) {
    var answer = 0;
    const graph = {};
    road.forEach((value) => {
        const [from,to,dist] = value;
        if(graph[from] == undefined) {
            graph[from] = [{to:to, dist:dist}];
        }else {
            graph[from].push({to:to, dist:dist});
        }
        if(graph[to] == undefined) {
            graph[to] = [{to:from, dist:dist}];
        }else {
            graph[to].push({to:from, dist:dist});
        }
    })
    const queue = [{to:1,dist:0}];
    const accDist = Array(N+1).fill(Infinity);
    // console.log(accDist);
    accDist[1] = 0;
    while(queue.length >0) {
        const {to} = queue.pop();
        graph[to].forEach((next) => {
            const toDist = accDist[to] + next.dist;
            if(accDist[next.to] > toDist) {
                accDist[next.to] = toDist;
                queue.push(next);
            }
        })
    }
    // console.log(accDist);
    
    accDist.forEach((value)=>{
        if(value <=K) {
            answer++;
        }
    })

    return answer;
}