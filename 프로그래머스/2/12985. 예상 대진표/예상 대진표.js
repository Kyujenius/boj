function solution(n, a, b) {
    let answer = 0; // 라운드를 저장할 변수

    // a와 b의 번호가 같아질 때까지 루프를 반복합니다.
    // 같아진다는 것은 같은 경기로 배정되었다는 의미입니다.
    while (a !== b) {
        // 다음 라운드로 진출하므로 라운드를 1 증가시킵니다.
        answer++;
        
        // a와 b를 각각 다음 라운드의 번호로 업데이트합니다.
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }

    return answer;
}