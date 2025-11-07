function solution(n, times) {
    // 1. '시간'의 범위를 Number로 설정
    times.sort((a, b) => a - b);
    
    let left = 1; 
    // 최악의 시간 (Number 범위 초과 위험이 매우 큼)
    let right = n * times[times.length - 1]; 
    
    let answer = right; 

    // 2. 이진 탐색 시작
    while (left <= right) {
        // 3. 'mid' (후보 시간) 설정
        // (left + right)가 Number 범위를 초과할 수 있음
        const mid = Math.floor((left + right) / 2);
        
        // 4. 'mid' 시간 동안 처리 가능한 총 인원(processed) 계산
        let processed = 0;
        for (const time of times) {
            processed += Math.floor(mid / time);
        }

        // 5. 판단 및 범위 좁히기
        if (processed >= n) {
            answer = mid; 
            right = mid - 1; 
        } 
        else {
            left = mid + 1; 
        }
    }

    return answer;
}