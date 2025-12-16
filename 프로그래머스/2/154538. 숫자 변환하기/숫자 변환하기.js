function solution(x, y, n) {
    // 0. 시작부터 같으면 0
    if (x === y) return 0;

    // obj 대신 현재 단계의 숫자들을 담을 Set 하나만 유지합니다.
    // (이전 단계들은 더 이상 필요 없으니까요)
    let currentStepNumbers = new Set([x]);
    
    // 전체 방문 기록 (중복 방지용)
    const visited = new Set([x]);

    let count = 0;

    // 1. 횟수 제한(13) 없이, 갈 곳이 있는 동안 계속 반복 (while)
    while (currentStepNumbers.size > 0) {
        // 이번 단계가 시작될 때 count 증가 (혹은 로직에 따라 조절)
        /* BFS 레벨 단위 탐색:
           현재 currentStepNumbers에 있는 것들은 'count'번 만에 도달한 수들입니다.
           여기서 파생된 수들은 'count + 1'번 만에 도달하게 됩니다.
        */
        
        const nextStepNumbers = new Set();

        for (const val of currentStepNumbers) {
            // 2. 만약 현재 단계에서 y가 발견되면 바로 리턴! (나중에 찾기 X)
            if (val === y) return count;

            // 다음 단계 숫자 생성
            const candidates = [val + n, val * 2, val * 3];

            for (const nextVal of candidates) {
                // 범위 체크 & 방문 체크
                if (nextVal <= y && !visited.has(nextVal)) {
                    visited.add(nextVal);
                    nextStepNumbers.add(nextVal);
                }
            }
        }
        
        // 다음 루프를 위해 현재 세트를 다음 세트로 교체
        currentStepNumbers = nextStepNumbers;
        count++;
    }

    // 3. while문이 끝났는데도 return을 못 했다면 y를 못 만든 것
    return -1;
}