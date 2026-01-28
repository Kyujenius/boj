function solution(places) {
    // 5개의 대기실을 각각 확인하여 결과를 배열에 담습니다.
    const answer = places.map(room => checkRoom(room));
    return answer;
}

// 하나의 대기실이 거리두기를 지키고 있는지 확인하는 함수 (지키면 1, 아니면 0)
function checkRoom(room) {
    // 대기실을 2차원 배열처럼 다루기 쉽도록 전처리 (문자열 배열 그대로 써도 무방하지만 편의상)
    const grid = room.map(row => row.split(''));
    const n = 5; // 대기실 크기 고정

    // 상하좌우 이동을 위한 델타 배열
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    // 모든 좌표를 순회하며 응시자(P)를 찾습니다.
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 'P') {
                // 응시자를 발견하면 BFS 시작
                if (!bfs(r, c)) {
                    return 0; // 거리두기 미준수 발견 시 즉시 0 반환
                }
            }
        }
    }
    return 1; // 모든 응시자가 규칙을 지켰다면 1 반환

    // BFS 함수: (r, c)에 있는 응시자 주변을 탐색
    function bfs(startR, startC) {
        const queue = [[startR, startC, 0]]; // [행, 열, 거리]
        // 방문 처리를 위한 배열 (현재 P 기준에서의 방문 여부)
        const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
        visited[startR][startC] = true;

        while (queue.length > 0) {
            const [currR, currC, dist] = queue.shift();

            // 거리가 2 이상이면 더 이상 탐색할 필요 없음 (거리두기 범위 밖)
            if (dist >= 2) continue;

            for (let i = 0; i < 4; i++) {
                const nr = currR + dr[i];
                const nc = currC + dc[i];

                // 1. 맵 범위를 벗어나지 않는지 확인
                if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
                    // 2. 이미 방문한 곳인지 확인
                    if (visited[nr][nc]) continue;
                    
                    // 3. 파티션(X)이 있으면 그 방향으로 더 못 감 -> 탐색 중단
                    if (grid[nr][nc] === 'X') continue;

                    // 4. 다음 칸이 응시자(P)라면? -> 거리 2 이내에 사람 만남 -> 실패!
                    if (grid[nr][nc] === 'P') return false;

                    // 5. 빈 테이블(O)이라면 계속 탐색 (큐에 추가)
                    visited[nr][nc] = true;
                    queue.push([nr, nc, dist + 1]);
                }
            }
        }
        return true; // 주변에 위험한 요소가 없음
    }
}