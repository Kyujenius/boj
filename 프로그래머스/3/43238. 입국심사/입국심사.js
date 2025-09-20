function solution(n, times) {
    // 1. 탐색 범위 설정
    let low = 0;
    let high = Math.max(...times) * n; 
    let answer = high;

    while (low <= high) {
        // 2. 중간값 (mid) 계산
        const mid = Math.floor((low + high) / 2);
        
        // mid 시간 동안 처리 가능한 총 사람 수 계산
        let totalPeople = 0;
        for (const time of times) {
            totalPeople += Math.floor(mid / time);
            // n명을 초과하면 더 이상 계산할 필요 없음
            if (totalPeople >= n) break;
        }

        // 3. 범위 좁히기
        if (totalPeople >= n) {
            // mid 시간으로 n명을 처리할 수 있으므로, 더 짧은 시간도 가능한지 탐색
            answer = mid;
            high = mid - 1;
        } else {
            // mid 시간으로는 n명을 처리할 수 없으므로, 더 긴 시간이 필요
            low = mid + 1;
        }
    }

    return answer;
}