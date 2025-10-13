function solution(maps) {
    const queue = [];
    const n = maps.length;
    const m = maps[0].length;
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0];
    const visited = Array.from({length:n}, () => Array(m).fill(false));
    // console.log(maps, visited);
    function bfs(x,y,counter) {
        for(let i =0; i<4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(ny >=0 && ny < n && nx >=0 && nx<m && maps[ny][nx] == 1 && visited[ny][nx] === false) {
                visited[ny][nx] = true;
                queue.push([nx,ny,counter+1]);
            }else if(ny === n-1 && nx === m-1) {
                return counter+1;
            }
        }
    }
    queue.push([0,0,1]);
    visited[0][0]= true
    while(queue.length >0) {
        const [x,y,counter] = queue.shift();
        if (x === m - 1 && y === n - 1) {
            return counter; // 최단 거리를 찾았으므로 반환
        }
        bfs(x,y,counter);
    }
    return -1;
}