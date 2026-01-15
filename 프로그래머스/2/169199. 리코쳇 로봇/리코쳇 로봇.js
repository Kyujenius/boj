function solution(board) {
    var answer = 0;
    // console.log(board);
    
    
    const goal = findPosition("G");
    const start = findPosition("R")
    
    const queue = [];
    const visited = Array.from({length: board.length},()=> Array(board[0].length).fill(false));
    queue.push([...start, 0]);
    // console.log(queue);
    while(queue.length > 0) {
        const [x,y,count] = queue.shift();
        
        if(x === goal[0] && y === goal[1]) return count;
        
        const dx = [-1,1,0,0];
        const dy = [0,0,1,-1];
        
        for(let i=  0 ; i<4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            while((nx>=0 && nx <board[0].length) &&
                 (ny>=0 && ny<board.length) &&
                 board[ny][nx] !== 'D') {
                nx += dx[i];
                ny += dy[i];
            }
            nx-=dx[i];
            ny-=dy[i];
            if(!visited[ny][nx]) {
                queue.push([nx,ny,count+1]);    
                visited[ny][nx] = true;
            }
        }
    }
    
    function findPosition (char) {
        for(let i = 0 ; i<board.length; i++) {
            for(let j = 0 ; j<board[0].length; j++) {
                if(board[i][j] === char) return [j,i];
            }
        }
    }
    return -1;
}

