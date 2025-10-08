function solution(k, dungeons) {
    let numDungeons = dungeons.length;
    let visited = Array(numDungeons).fill(false);
    let maxNum = 0;
    function dfs(currentK, count) {
        maxNum = Math.max(maxNum,count);
        for(let i = 0; i<numDungeons; i++) {
            if(currentK >= dungeons[i][0] && visited[i] == false) {
                visited[i] = true;      
                dfs(currentK - dungeons[i][1], count+1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0)
    return maxNum;
}