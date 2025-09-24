function solution(maps) {
    var answer = 0;
    let queue = [];
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1,1,0,0]
    const dy = [0,0,1,-1];
    
    queue.push([0,0,1]);
    maps[0][0] = 0;
    
    while(queue.length > 0) {
        // console.log(maps);
        const array = queue.shift();
        for(let i = 0 ; i<4; i++) {
            const nx = array[0] + dx[i];
            const ny = array[1] + dy[i];
            if(nx == n-1 && ny == m-1) {
                return array[2]+1;
            }
            if(nx>=0 && ny >=0 && nx < n && ny <m && maps[nx][ny] == 1) {
                maps[nx][ny] = 0;
                queue.push([nx,ny, array[2]+1]);
            }
        }
        
    }
    answer = -1;
    return answer;
}