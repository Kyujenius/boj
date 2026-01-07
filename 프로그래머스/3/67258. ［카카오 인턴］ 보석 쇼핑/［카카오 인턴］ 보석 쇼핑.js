function solution(gems) {
    // 1. 전체 보석의 종류 개수를 파악합니다. (중복 제거)
    const cnt = new Set(gems).size;
    
    // 현재 구간에 포함된 보석들을 관리할 Map
    const map = new Map();
    
    // 답을 저장할 변수 [길이, 시작인덱스, 끝인덱스]
    // 초기값은 배열 길이보다 큰 값으로 설정하여 첫 갱신이 무조건 일어나게 함
    let answer = [gems.length + 1, 0, 0];
    
    let left = 0;
    
    // right 포인터를 0부터 끝까지 이동시킵니다.
    for (let right = 0; right < gems.length; right++) {
        // 2. 오른쪽 보석을 Map에 추가합니다.
        const rightGem = gems[right];
        map.set(rightGem, (map.get(rightGem) || 0) + 1);
        
        // 3. Map에 모든 종류의 보석이 다 들어있는 경우, 범위를 최소화 시도합니다.
        while (map.size === cnt) {
            // 현재 구간(left ~ right)이 지금까지 찾은 최단 구간보다 짧다면 갱신
            // (길이가 같다면 시작 인덱스가 작은 것이 우선이므로 갱신하지 않음)
            if (right - left < answer[0]) {
                answer = [right - left, left + 1, right + 1];
            }
            
            // 4. 왼쪽 보석을 제거하며 범위를 줄여봅니다.
            const leftGem = gems[left];
            map.set(leftGem, map.get(leftGem) - 1);
            
            // 만약 해당 보석의 개수가 0이 되면 Map에서 삭제 (종류 수가 줄어듦)
            if (map.get(leftGem) === 0) {
                map.delete(leftGem);
            }
            
            // 왼쪽 포인터 이동
            left++;
        }
    }
    
    // 저장된 시작점과 끝점을 반환
    return [answer[1], answer[2]];
}