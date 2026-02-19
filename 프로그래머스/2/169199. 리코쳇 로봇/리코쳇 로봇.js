function solution(board) {
    var answer = -1;
    const rPos = findChar(board,"R");
    const gPos = findChar(board,"G");
    const visited = Array.from({length: board.length}, ()=> Array(board[0].length).fill(false));
    // console.log(rPos,gPos);
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const queue = [];
    queue.push([...rPos,0])
    while(queue.length >0) {
        const [x,y,count] = queue.shift();
        if(x === gPos[0] && y === gPos[1]) {
            return count;
        }
        
        
        for(let i = 0 ; i<4; i++) {
            //한 방향으로 이동하되, D를 만나거나, 벽을 만날 때까지 이동    
            let nx = dx[i] + x;
            let ny = dy[i] + y;
            while((nx >= 0 && nx <board[0].length) &&
                 (ny >= 0 && ny <board.length) &&
                 (board[ny][nx] !== "D")) {
                nx += dx[i];
                ny += dy[i];
            }
            nx -= dx[i];
            ny -= dy[i];
            if(!visited[ny][nx]) {
                queue.push([nx,ny,count+1]);
                visited[ny][nx] = true;
            }
            
        }
    }
    
    
    return answer;
}

function findChar(board,char) {
    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[0].length; j++) {
            if(char === board[i][j]) {
                return [j,i];
            }
        }
    }
}