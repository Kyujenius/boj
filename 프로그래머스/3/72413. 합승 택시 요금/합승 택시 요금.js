function solution(n, s, a, b, fares) {
    var answer = Infinity;
    const dist = Array.from({length: n+1},()=> Array(n+1).fill(Infinity));
    
    fares.forEach(([from,to,cost])=> {
        dist[from][to] = cost;
        dist[to][from] = cost;
    })
    for(let i = 1; i<=n; i++) {
        dist[i][i] = 0;
    }
    // console.log(dist);

    for(let k = 1; k<=n; k++) {
        for(let i = 1; i<=n; i++) {
            for(let j = 1; j<=n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    // console.log('----------');
    // console.log(dist);
    for(let i = 1; i<=n; i++) {
        answer = Math.min(answer, dist[s][i] + dist[i][a] + dist[i][b]);
    }
    
    return answer;
}

//다익스트라,
//플로이드 워셜