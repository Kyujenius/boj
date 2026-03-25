// 1. 노드 구조 정의
class Node {
    constructor(idx) {
        this.idx = idx;  // 행 번호
        this.prev = null; // 이전 노드 객체
        this.next = null; // 다음 노드 객체
    }
}

function solution(n, k, cmd) {
    // 2. 모든 노드 생성 및 배열에 보관 (즉시 접근용)
    const nodes = Array.from({ length: n }, (_, i) => new Node(i));
    
    // 3. 노드들끼리 앞뒤로 연결 (기차 놀이)
    for (let i = 0; i < n; i++) {
        if (i > 0) nodes[i].prev = nodes[i - 1];
        if (i < n - 1) nodes[i].next = nodes[i + 1];
    }

    let curr = nodes[k]; // 현재 선택된 노드
    const stack = [];    // 삭제된 노드 객체를 담을 스택

    for (const c of cmd) {
        const [action, num] = c.split(" ");

        if (action === "U") {
            // 위로 이동: prev를 타고 올라감
            for (let i = 0; i < parseInt(num); i++) curr = curr.prev;
        } else if (action === "D") {
            // 아래로 이동: next를 타고 내려감
            for (let i = 0; i < parseInt(num); i++) curr = curr.next;
        } else if (action === "C") {
            stack.push(curr); // 현재 노드 통째로 저장
            
            const p = curr.prev;
            const n = curr.next;

            // 연결 끊고 앞뒤 연결해주기
            if (p) p.next = n;
            if (n) n.prev = p;

            // 다음 위치 결정: 아래가 없으면 위로, 있으면 아래로
            curr = n ? n : p;
        } else if (action === "Z") {
            const restored = stack.pop();
            const p = restored.prev;
            const n = restored.next;

            // 다시 끼워넣기 (앞뒤 노드가 여전히 존재한다면 연결 복구)
            if (p) p.next = restored;
            if (n) n.prev = restored;
        }
    }

    // 4. 결과 출력: 처음엔 모두 "O", 스택에 있는 애들만 "X"
    const result = new Array(n).fill("O");
    stack.forEach(node => {
        result[node.idx] = "X";
    });

    return result.join("");
}