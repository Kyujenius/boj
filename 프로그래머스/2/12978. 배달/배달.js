function solution(N, road, K) {
    var answer = 0;
    const graph = {};
    const accDist = Array(N+1).fill(Infinity);
    const queue = [];
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
    console.log(graph);
    accDist[1] = 0;
    queue.push({to:1,dist:0});
    while(queue.length>0){
        const {to} =queue.pop();
        graph[to].forEach((next)=> {
            const acc = accDist[to] + next.dist;
            if(accDist[next.to] > acc) {
                accDist[next.to] = acc;
                queue.push(next);
            }
        })
    }
    // console.log(accDist);
    
    accDist.forEach((value) => {
        if(value<= K) answer ++;
    })
    return answer;
}