function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    // 1. 올바른 2D visited 배열 초기화
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    // 상하좌우 이동을 위한 배열
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [];
    
    // 2. 시작점을 큐에 추가 (x, y, 거리). 거리는 1부터 시작
    queue.push([0, 0, 1]);
    visited[0][0] = true;
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        // 목적지에 도착했으면 현재까지의 거리를 반환
        if (x === m - 1 && y === n - 1) {
            return dist;
        }
        
        // 4. 상하좌우 네 방향으로 이동
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 맵의 경계를 벗어나지 않고,
            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                // 벽이 아니며, 아직 방문하지 않은 곳이라면
                if (maps[ny][nx] === 1 && !visited[ny][nx]) {
                    visited[ny][nx] = true; // 방문 처리
                    queue.push([nx, ny, dist + 1]); // 큐에 추가
                }
            }
        }
    }
    
    // 3. 큐가 비었는데도 목적지에 도달하지 못했다면 -1 반환
    return -1;
}