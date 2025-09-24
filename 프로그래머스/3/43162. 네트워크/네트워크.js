function solution(n, computers) {
    var answer = 0;
    let visited = Array(n).fill(false);
    function dfs(node) {
        visited[node] = true;
        computers[node].forEach((value,index)=> {
            if(value === 1 && !visited[index]) {
                dfs(index);
            }
        })
    }
    
    for(let i = 0 ; i <n; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}