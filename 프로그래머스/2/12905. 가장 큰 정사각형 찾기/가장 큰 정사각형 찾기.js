function solution(board)
{
    const n = board.length;
    const m = board[0].length;
    let maxNumber = 0;
    
    // 만약 행이나 열이 1개라면 루프를 타지 않으므로 미리 체크
    if (n < 2 || m < 2) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 1) return 1;
            }
        }
        return 0;
    }
    
    //i : 횟수 - 돌아봤자 maxCount바퀴가 최대임
    for(let k = 1; k<n; k++) {
        for(let j = 1 ; j<m; j++) {
            if(board[k][j] === 1) {
                const temp = Math.min(board[k-1][j-1],board[k-1][j],board[k][j-1]) +1;
                board[k][j] = temp;
                maxNumber = Math.max(maxNumber,temp);    
            }
            
            
        }
    }
    // console.log(board);
    return maxNumber*maxNumber;
}