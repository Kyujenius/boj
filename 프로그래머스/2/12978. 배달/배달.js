function solution(N, road, K) {
    var answer = 0;
    const dist = Array(N+1).fill(Infinity);
    const map = {};
    road.forEach(([from,to,dist])=> {
        if(map[from] ==undefined) {
            map[from] = [[to,dist]];
        }else {
            map[from].push([to,dist]);
        }
        if(map[to] ==undefined) {
            map[to] = [[from,dist]];
        }else {
            map[to].push([from,dist]);
        }
    })
    
    
    //최초에는 1로 가는데 0 만큼 쓰는 것으로 시작
    const queue = [[1,0]];
    dist[1] = 0;
    
    while(queue.length > 0) {
        const [from, fromDist] = queue.shift();
        map[from].forEach(([to,toDist])=> {
            if(dist[to] > toDist + fromDist) {
                queue.push([to,toDist + fromDist]);
                dist[to] = toDist + fromDist;
            }
        })
    }
    // console.log(dist);
    // console.log(map);
    
    answer =  dist.filter((value)=> value<=K).length;
    
    return answer;
}

//각 도로를 건너는 데에 걸리는 시간은 도로별로 다르다는 것 -> 다익스트라 알고리즘