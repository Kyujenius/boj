function solution(maps) {
    const n = maps.length; // 행 (rows)
    const m = maps[0].length; // 열 (cols)
    
    // visited 배열 초기화
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    const queue = [];
    queue.push([0, 0, 1]); // 시작점 [행, 열, 거리]
    visited[0][0] = true; // 시작점 방문 처리
    
    // 상하좌우 이동을 위한 배열
    const dx = [-1, 1, 0, 0]; // 행(row) 이동
    const dy = [0, 0, -1, 1]; // 열(col) 이동
    
    while(queue.length > 0) {
        // 큐에서 현재 위치와 거리를 가져옴
        const [x, y, counter] = queue.shift();
        
        // **[수정 1]** 목표 지점 확인 (n-1, m-1)
        if(x === n - 1 && y === m - 1) {
            return counter; // 목표 도착 시 거리 반환
        }
        
        // 현재 위치에서 4방향 탐색
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i]; // 새로운 행(row)
            const ny = y + dy[i]; // 새로운 열(col)
            
            // **[수정 2]** 맵 범위 확인 (nx는 n과, ny는 m과 비교)
            if(nx >= 0 && nx < n && ny >= 0 && ny < m) {
                
                // **[수정 3]** 방문하지 않았고, 벽이 아닌지 확인 (인덱스 순서 [nx][ny])
                if(maps[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true; // 방문 처리
                    // **[수정 4]** 큐에 다음 위치 추가 (인덱스 순서 [nx, ny])
                    queue.push([nx, ny, counter + 1]);
                }
            }
        }
    }
    
    // 큐가 비었는데 목표에 도달하지 못함
    return -1;
}