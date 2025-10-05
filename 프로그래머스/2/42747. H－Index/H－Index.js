function solution(citations) {
    let answer = 0;
    const n = citations.length;

    // h의 후보를 1부터 n까지 순회합니다.
    for (let h = 1; h <= n; h++) {
        // h번 이상 인용된 논문의 개수를 셉니다.
        const count = citations.filter(citation => citation >= h).length;

        // h번 이상 인용된 논문이 h편 이상이라면, h-index의 조건을 만족합니다.
        // 이 h값은 h-index 후보가 될 수 있습니다.
        if (count >= h) {
            // h를 오름차순으로 확인하고 있으므로, 마지막으로 업데이트된 값이 최댓값입니다.
            answer = h;
        } else {
            // 만약 h번 이상 인용된 논문이 h편 미만이라면,
            // 이보다 더 큰 h에 대해서는 절대 조건을 만족할 수 없으므로 탐색을 중단합니다.
            break;
        }
    }

    return answer;
}