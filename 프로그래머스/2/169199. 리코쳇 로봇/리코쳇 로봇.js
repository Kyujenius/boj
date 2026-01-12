function solution(b) {
    var answer = -1;
    const [startX, startY] = findPosition("R");
    const [goalX,goalY] = findPosition("G");
    const queue = [[startX,startY,0]];
    
    const visited = Array.from({length: b.length}, () => Array(b[0].length).fill(false));
    visited[startY][startX] = true;

    while(queue.length > 0){
        const [x,y,count] = queue.shift();
        if(x === goalX && y === goalY) {
            return count;
        }
        
        const dx = [-1,0,0,1];
        const dy = [0,1,-1,0];
        // 각 방향별로 끝까지 가보고, 벽이나, D를 만나면 멈추기!
        for(let i= 0 ; i<4; i++) {
            let nx = x;
            let ny = y;
            
            while(
                nx>= 0 && nx< b[0].length &&
                ny>= 0 && ny< b.length &&
                b[ny][nx] !== 'D'
            ) {
                nx += dx[i];
                ny += dy[i];
            }
            
            ny-= dy[i];
            nx-= dx[i];
            
            if(!visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([nx,ny,count+1]);
            }

        }
        
        
    }
    
    
    function findPosition (char) {
        const board = b.map((value) => value.split(""));
        for(let i= 0 ; i<board.length; i++) {
            for(let j = 0 ; j <board[0].length; j++) {
                if(board[i][j] === char) return [j,i];
            }
        }
    }    
    
    return answer;
}

