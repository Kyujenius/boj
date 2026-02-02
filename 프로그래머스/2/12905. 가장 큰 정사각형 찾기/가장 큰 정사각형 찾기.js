function solution(board)
{
    var answer = 1234;
    const n = board.length;
    const m = board[0].length;
    const map = Array.from({length:n},()=> Array(m).fill(0));
    
    // 만약 행이나 열이 1개라면, 내부 루프를 돌지 않으므로 직접 확인
    if (n < 2 || m < 2) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 1) return 1;
            }
        }
        return 0;
    }
    
    let maxNum = 0;
    for(let i = n-2; i>=0 ; i--) {
        for(let j = m-2; j>= 0; j--) {
            // console.log(i,j,board);
            if(board[i][j] === 1) {
                board[i][j] = check(i,j);
                maxNum = Math.max(maxNum,board[i][j]);        
            }
            
        }
    }
    
    // console.log(board);
    
    function check(i,j) {
        return Math.min(board[i+1][j], board[i][j+1], board[i+1][j+1]) + 1;
    }

    answer = maxNum * maxNum;
    return answer;
}