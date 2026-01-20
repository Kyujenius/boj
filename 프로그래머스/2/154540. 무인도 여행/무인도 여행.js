function solution(m) {
    var answer = [];
    const maps = m.map((value)=> value.split(""));
    //이중 포문내에서 각 위치별로 숫자면? -> bfs 시작 -> 각 위치 돌아다니며 visited 체크;
    //한 번의 bfs가 끝나면? -> 그 숫자들 다 더해서 answer 에 담기;
    // console.log(visited);

    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false));
    let isFound = false;
    for(let i = 0 ; i<maps.length; i++) {
        for(let j = 0 ; j<maps[0].length; j++) {
            const start = maps[i][j];
            if(start === 'X') {
                visited[i][j] = true;   
                // console.log([j,i],"pass");
                continue;
            }
            if(visited[i][j]) continue;
            
            const queue = [];
            queue.push([i,j,start]);
            visited[i][j] = true;
            isFound = true;

            let temp = 0;
            while(queue.length>0) {
                const [y,x,point] = queue.shift();
                temp += parseInt(point);
                
                for(let k = 0 ; k<4; k++) {
                    const nx = x + dx[k];
                    const ny = y + dy[k];
                    
                    if(nx>=0 && nx <maps[0].length && ny >=0 && ny<maps.length && !visited[ny][nx] && maps[ny][nx] !== 'X') {
                        visited[ny][nx] = true;
                        queue.push([ny,nx,maps[ny][nx]]);
                    }
                }
            }
            answer.push(temp);
            
        }
    }
    if(!isFound) return [-1];
    //숫자가 아니면? 'X' 이면 visited 로 침
    
    
    // console.log(maps);
    return answer.sort((a,b)=>a-b);
}