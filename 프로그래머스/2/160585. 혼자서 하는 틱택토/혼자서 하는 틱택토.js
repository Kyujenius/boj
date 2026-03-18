function solution(board) {
    var answer = 1;
    

    
        
    // some 과 every를 조합해서 한 합격 세트라도 포함되어있으면 1자 완성 조건임
    const bingoSets = [[[0,0],[0,1],[0,2]],
                      [[0,2],[1,2],[2,2]],
                      [[2,0],[2,1],[2,2]],
                      [[0,0],[1,0],[2,0]],
                      [[0,0],[1,1],[2,2]],
                      [[0,1],[1,1],[2,1]],
                      [[1,0],[1,1],[1,2]],
                      [[0,2],[1,1],[2,0]]];
    
    // 첨부터 끝까지 O 와 X 의 위치를 다 배열에 넣는다. 
    const newBoard = board.map((row)=>row.split(""));
    const n = newBoard.length;
    const m = newBoard[0].length;
    const OArr = [];
    const XArr = [];
    for(let i = 0 ; i<n; i++) {
        for(let j = 0; j<m; j++) {
            if(newBoard[i][j]=== "O") {
                OArr.push([i,j]);
            }else if(newBoard[i][j] === 'X'){
                XArr.push([i,j]);
            }
        }
    }
    // console.log(OArr,XArr);
    // console.log(isBingo(OArr),isBingo(XArr));
    
    // O 와 X가 차가 2 이상일 때 -> 거짓 
    // 만약 둘의 개수가 같을 때, 하나는 일자일 때 -> 참 
    // 둘의 차이가 1개가 날 때, (A가 더 큼) B는 완성이 되었으면 -> 거짓
    // 둘의 차이가 1개가 날 떄, (A가 더 큼) A가 완성이 되었으면 -> 참
    
    const oWins = isBingo(OArr);
    const xWins = isBingo(XArr);
    
    const oCnt = OArr.length;
    const xCnt = XArr.length;

    // 규칙 1: 개수 차이 검증
    if (xCnt > oCnt || oCnt - xCnt > 1) return 0;
    // 규칙 2: 둘 다 승리할 수는 없음
    if (oWins && xWins) return 0;

    // 규칙 3: O가 승리했다면, X보다 무조건 1개 많아야 함 (개수가 같으면 안 됨)
    if (oWins && oCnt !== xCnt + 1) return 0;

    // 규칙 4: X가 승리했다면, O와 개수가 무조건 같아야 함 (O가 더 많으면 안 됨)
    if (xWins && oCnt !== xCnt) return 0;
    

    function isBingo(arr) {
        let bingo = false;
        //빙고셋 중에 하나라도 (한 줄이라도)
        bingoSets.forEach((bingoSet)=> {
            // console.log(`bingoSet: ${bingoSet}`);
            // console.log(`arr: ${arr}`);
            // 모두 해당되는 게 있니? (빙고니?)
            if(bingoSet.every(p => arr.some(a => a[0] === p[0] && a[1] === p[1]))) {
                bingo = true;
            }
            // console.log('------')
        })
        
        return bingo;
    }
    
    return answer;
}