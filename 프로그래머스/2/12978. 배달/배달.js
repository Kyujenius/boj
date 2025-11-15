function solution(N, road, K) {
    var answer = 0;
    const graph = {}
    //road 값을 이용해서 from to dist 로 일단 각각 만들고, 각 값으로 
    //graph를 만든다. 
    road.forEach((value) => {
        const [from,to,dist] = value;
        if(graph[from] == undefined) {
            graph[from] = [{to:to, dist:dist}];
        }else {
            graph[from].push({to:to, dist:dist});
        }
        if(graph[to] == undefined) {
            graph[to] = [{to:from, dist:dist}]
        }else {
            graph[to].push({to:from, dist:dist});
        }
    })
    graph[0] = [{to: 1, dist: 0}]
    console.log(graph);

    const accDist = Array(N+1).fill(Infinity);
    // console.log(accDist);
    //1번 마을을 기준으로 3보다 다 적은 부분의 거리를 재자.
    accDist[1] = 0;
    const queue = [{to:1, dist:0}];
    while(queue.length > 0) {
        const {to} = queue.shift();
        //이미 갈 곳의 누적 거리 + 가기 위해 피룡한 거리
        graph[to].forEach((next) => {
            const acc = accDist[to] + next.dist;
            //이미 갈 곳의 누적 거리 + 가기 위해 피룡한 거리
            if(accDist[next.to] > acc) {
                accDist[next.to] = acc;
                queue.push(next);
            }
        })
      
    }
    // console.log(accDist)
    
    accDist.forEach((value)=>{
        if(value<=K){
        answer++;
    }
    }
                   )

    return answer;
}