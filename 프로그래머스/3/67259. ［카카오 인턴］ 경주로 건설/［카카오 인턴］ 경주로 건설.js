function solution(board) {
    var answer = 0;
    const n = board.length;
    // dist[y][x][direction]: (y,x)에 direction 방향으로 도달했을 때의 최소 비용
    // 방향: 0(상), 1(하), 2(좌), 3(우)
    const dist = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => Array(4).fill(Infinity))
    );
    // console.log(dist);
    
    const queue = [];
    //direction 먼저 정하기 상(0), 하(1), 좌(2), 우(3),
    if(board[0][1] == 0) {
        queue.push([0,1,3,100]);
        dist[0][1][3] = 100;
    }
    if(board[1][0] == 0) {
        queue.push([1,0,1,100]);
        dist[1][0][1] = 100;
    }
    
    while(queue.length>0) {
        // console.log(queue);
        const [y,x,dir,cost] = queue.shift();
        
        if(cost > dist[y][x][dir]) continue;
        
        const dx = [0,0,-1,1];
        const dy = [-1,1,0,0];
        
        for(let i = 0; i<4; i++) {
            const nx = dx[i] +x;
            const ny = dy[i] +y;
            const newCost = i === dir ? cost+100 : cost+600 ;
            if(
               (nx >= 0 && nx < n) &&
               (ny >= 0 && ny < n) &&
               (dist[ny][nx][i] > newCost) &&
               (board[ny][nx] == 0)
              ) {
                queue.push([ny,nx,i,newCost]);
                dist[ny][nx][i] = newCost;
            }
        }
    }
    // console.log(dist);
    answer = Math.min(dist[n-1][n-1][0],dist[n-1][n-1][1],dist[n-1][n-1][2],dist[n-1][n-1][3])
    return answer;
}