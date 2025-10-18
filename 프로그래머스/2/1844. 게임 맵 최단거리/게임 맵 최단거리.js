function solution(maps) {
    const m = maps[0].length;
    const n = maps.length;
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const queue = [];
    
    function bfs(x,y, count){
        const dx = [0,0,-1,1];
        const dy = [1,-1,0,0];
        for(let i = 0; i<4; i++) {
            const nx = x+ dx[i];
            const ny = y+ dy[i];
            if(nx >=0 && nx < m && ny >=0 && ny < n && !visited[ny][nx] && maps[ny][nx] === 1) {
                visited[ny][nx] = true;
                queue.push([nx,ny,count +1])
            }
        }
    }
    
    queue.push([0,0,1]);
    visited[0][0] = true;
    
    while(queue.length >0) {
        const [x,y,count] = queue.shift();
        if(x === m-1 && y === n-1) {
            return count;
        }else {
            bfs(x,y,count);    
        }
        
    }
    
    return -1;
}