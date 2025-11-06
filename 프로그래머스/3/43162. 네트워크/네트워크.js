function solution(n, computers) {
    var answer = 0;
    //n 번까지 하나씩 찾으면서, 각 node랑 연결된 모든 것들을 visited로 취급함.
    //다만, 한 번 노드의 시작할 때만, count+1 하기
    const length = computers.length;
    const visited = Array(length).fill(false);
    const queue= [];
    
    
    function dfs(i) {
        answer++;
        visited[i] = true;
        const node = computers[i];
        queue.push(node);
        while(queue.length >0) {
            const shiftedNode = queue.shift();
            for(let j = 0 ; j<shiftedNode.length ; j++) {
                //연결됐고, 내가 아니고, 방문했던 곳이 아니면 queue에 추가, 
                if(j !== i && shiftedNode[j] == 1 && visited[j] == false) {
                    visited[j] = true;
                    queue.push(computers[j]);
                }
            }
        }
    }
    for(let i =0 ; i<length; i++) {
        if(visited[i] == false) {
            // 최초 방문 안 한 곳이면, dfs로 계속 node의 끝까지 탐색해야함
            dfs(i);
        }
    }
    
    
    return answer;
}