function solution(m, n, board) {
    var answer = 0;
    board = board.map((value)=> value.split(""));
    
    // console.log(is2x2);
    
    while(true) {
        const is2x2 = Array.from({length: board.length}, ()=> {
            return Array(board[0].length).fill(0)
        });
        let count = 0;
        
        // 2x2 가 통하는 곳을 찾는다.
        // 통한 부분에 한해서, 1로 표시한다.
        for(let i= 0 ; i<board.length-1; i++) {
            for(let j = 0; j<board[0].length-1; j++) {
                const target = board[i][j];
                
                if((target === board[i+1][j])&&
                  (target === board[i][j+1])&&
                  (target === board[i+1][j+1]) &&
                   (target !== '0')
                  ) {
                        if(is2x2[i][j] !== 1) {
                           count++;
                        }
                        if(is2x2[i][j+1] !== 1) {
                           count++;
                        }
                        if(is2x2[i+1][j] !== 1) {
                           count++;
                        }
                        if(is2x2[i+1][j+1] !== 1) {
                           count++;
                        }
                       is2x2[i][j] = 1;
                       is2x2[i+1][j+1] = 1;
                       is2x2[i][j+1] = 1;
                       is2x2[i+1][j] = 1;
                   }
            }
        }
        
        
    
        // 통한 부분이 없으면 break;
        if(count == 0) {
            break;
        }else {
            answer += count;
        }
        
        const newBoard = [];
        // 1로 표시한 부분을 아래로 내리고, 안 채워진 부분에 한해서 0 으로 채운다.
        for(let j =  0; j< board[0].length; j++) {
            const column = [];
            let zeroCount = 0;
            for(let i = board.length-1; i>=0; i--) {
                if(is2x2[i][j] !== 1){
                    column.push(board[i][j]);
                }else {
                    zeroCount++;
                }
            }
            for(let i = 0 ; i<zeroCount;i++) {
                column.push('0');
            }
            newBoard.push(column);
        }
        
        
        // console.log(board);
        // console.log(newBoard);
        for(let i = 0 ; i<board.length; i++) {
            for(let j = 0 ; j<board[0].length; j++) {
                board[i][j] = newBoard[board[0].length-1 - j][board.length -1-i];
            }
        }
        // break;
    }
    return answer;
}