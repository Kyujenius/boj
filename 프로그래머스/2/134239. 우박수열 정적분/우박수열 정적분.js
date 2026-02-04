function solution(k, ranges) {
    var answer = [];
    const graph = [];
    while(true) {
        graph.push(k);

        if(k% 2 ===0) {
           k = k / 2;
        }else {
           k = k * 3 + 1;
        }
        if(k <= 1) break;
    }
    
    graph.push(1);
    
    console.log(graph);
    
    //각 index ~ index-1 사이의 값을 일단 구한다.
    const area = [];
    for (let i = 0; i<graph.length-1; i++) {
        const higher = Math.max(graph[i],graph[i+1]);
        const lower = Math.min(graph[i],graph[i+1]);
        area[i] =  ((higher - lower) / 2) + lower;
    }
    // console.log(area);
    
// 3. 엣지케이스가 해결된 구간 계산
    ranges.forEach(([from, to]) => {
        // 핵심: 'to'가 0이든 음수든 상관없이 실제 끝 인덱스로 변환
        // graph.length - 1은 마지막 x 좌표의 위치입니다.
        const actualEnd = (graph.length - 1) + to;
        
        // 엣지케이스 1: 시작점(from)이 끝점(actualEnd)보다 큰 경우
        if (from > actualEnd) {
            answer.push(-1.0);
        } 
        // 엣지케이스 2: 시작점과 끝점이 같은 경우 (넓이 0)
        else if (from === actualEnd) {
            answer.push(0.0);
        }
        // 정상적인 경우
        else {
            let sum = 0;
            for (let i = from; i < actualEnd; i++) {
                sum += area[i];
            }
            answer.push(sum);
        }
    });
    
   return answer;
}