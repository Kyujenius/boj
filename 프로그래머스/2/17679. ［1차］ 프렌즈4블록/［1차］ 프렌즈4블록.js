function solution(m, n, board) {
    var answer = 0;
    let map = board.map((line) => line.split(""));

    while (true) {
        const targets = [];

        // 1. 2x2 매칭 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const char = map[i][j];
                if (char !== '0' &&
                    char === map[i][j + 1] &&
                    char === map[i + 1][j] &&
                    char === map[i + 1][j + 1]) {
                    targets.push([i, j]);
                }
            }
        }

        if (targets.length === 0) break;

        // 2. 블록 제거 및 카운팅 (0으로 표시)
        targets.forEach(([i, j]) => {
            if (map[i][j] !== '0') { map[i][j] = '0'; answer++; }
            if (map[i + 1][j] !== '0') { map[i + 1][j] = '0'; answer++; }
            if (map[i][j + 1] !== '0') { map[i][j + 1] = '0'; answer++; }
            if (map[i + 1][j + 1] !== '0') { map[i + 1][j + 1] = '0'; answer++; }
        });

        // 3. 중력 로직 (수정된 부분)
        for (let j = 0; j < n; j++) {
            const column = [];
            // 해당 열에서 살아남은 블록만 순서대로 추출 (0 제외)
            for (let i = 0; i < m; i++) {
                if (map[i][j] !== '0') {
                    column.push(map[i][j]);
                }
            }
            
            // 바닥(m-1)부터 위로 올라가며 블록 채우기
            for (let i = m - 1; i >= 0; i--) {
                // column의 마지막 요소(가장 아래에 있던 블록)를 꺼내서 바닥부터 채움
                if (column.length > 0) {
                    map[i][j] = column.pop(); 
                } else {
                    map[i][j] = '0'; // 더 이상 블록이 없으면 빈칸 처리
                }
            }
        }
    }
    return answer;
}