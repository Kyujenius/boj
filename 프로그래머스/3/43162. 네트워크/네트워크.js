function solution(n, computers) {
    var answer = 0;
    const visited = Array(computers.length).fill(false);
    console.log(visited);
    
    function dfs(i) {
        const node = computers[i];
        for(let j = 0 ; j<node.length; j++) {
            if(j !== i && node[j] == 1 && visited[j] == false) {
                visited[j] = true;
                dfs(j);
                console.log(i,j);
            }
        }
    }
    for(let i = 0 ; i<computers.length; i ++) {
        if(visited[i] == false) {
            answer++;
            dfs(i);
        }
    }
    return answer;
}