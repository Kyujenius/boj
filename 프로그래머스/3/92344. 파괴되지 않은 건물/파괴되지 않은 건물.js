function solution(board, skills) {
    var answer = 0;
    const finalBoard = Array.from({length: board.length+1},()=> Array(board[0].length +1).fill(0));
    skills.forEach((skill)=> {
        let [type,r1,c1,r2,c2,degree] = skill;
         
        // skill 을 미리 합치기 가능한가? 
        if(type === 1) {
            degree *= -1;
        }
        
        finalBoard[r1][c1] += degree;
        finalBoard[r1][c2+1] -= degree;
        finalBoard[r2+1][c1] -= degree;
        finalBoard[r2+1][c2+1] +=degree;
        // console.log("---------")
        // console.log(board);
    })
    const N = board.length;
    const M = board[0].length;

    // 가로 누적합: 행 고정(i), 열을 왼→오 (j는 1부터)
    for (let i = 0; i < N + 1; i++) {
        for (let j = 1; j < M + 1; j++) {
            finalBoard[i][j] += finalBoard[i][j - 1];
        }
    }

    // 세로 누적합: 열 고정(j), 행을 위→아래 (i는 1부터)
    for (let j = 0; j < M + 1; j++) {
        for (let i = 1; i < N + 1; i++) {
            finalBoard[i][j] += finalBoard[i - 1][j];
        }
    }

    // ③ 카운트: 원본 board 크기(N, M)만큼만 순회. finalBoard의 +1 영역은 안 셈
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] + finalBoard[i][j] >= 1) answer++;
        }
    }
    return answer;
}