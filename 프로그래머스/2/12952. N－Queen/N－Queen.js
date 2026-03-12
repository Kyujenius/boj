function solution(n) {
    var answer = 0;
    const board = Array(n).fill(0);
    function isSafe(row,col) {
        for(let i = 0; i<row; i++) {
            if(board[i] === col || Math.abs(row-i) === Math.abs(col-board[i])){
                return false;
            }    
        }
        return true;
    }
    
    function dfs(number) {
        if(number === n) {
            answer++;
            return;
        }
        for(let col = 0 ; col<n; col++) {
            if(isSafe(number,col)) {
                board[number] = col;
                dfs(number+1);
            }
        }
    }
    dfs(0);
    return answer;
}