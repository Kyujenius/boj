function solution(k, dungeons) {
    const numDungeons = dungeons.length;
    const visited = Array(numDungeons).fill(false);
    let maxCount = 0;
    function dfs(currentK, count) {
        maxCount = Math.max(count, maxCount);
        for(let i = 0 ; i <numDungeons; i++) {
                if(visited[i] == false && currentK >= dungeons[i][0]) {
                    visited[i] = true;
                    dfs(currentK-dungeons[i][1], count+1);
                    visited[i] = false;
                }
            }    
    }
    dfs(k,0)
    
    return maxCount;
}