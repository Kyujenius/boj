function solution(m, n, board) {
    var answer = 0;
    const map = board.map((row)=>row.split(""));
        
    while(true) {
        //map 에서 패턴 있는지 개수 세서 bingoMap에 넣기
        const bingoMap = Array.from({length: m},()=>Array(n).fill(0));

        let bingoCount = 0;
        for(let i = 0; i<m-1; i++){
            for(let j = 0; j<n-1; j++) {
                const char = map[i][j];
                if((char === map[i+1][j])&&
                   (char === map[i][j+1])&&
                   (char === map[i+1][j+1]) && (
                char !== 0)
                  ) {
                    bingoMap[i][j] = 1;
                    bingoMap[i][j+1] = 1;
                    bingoMap[i+1][j] = 1;
                    bingoMap[i+1][j+1] = 1;
                    bingoCount+=1;
                }
            }
        }
        //없으면 break
        if(bingoCount === 0) break;
        //있으면 그 bingoMap 을 통해서 다시 채우고 끝내기
        // console.log(bingoMap)
        for(let i = 0; i<n; i++) {
            const column = [];
            let zeroCount = 0;
            for(let j = m-1; j>=0; j--) {
                if(bingoMap[j][i] === 0) {
                    column.push(map[j][i]);    
                }else {
                    zeroCount++;
                    answer++;
                }
            }
            for(let k = 0; k<zeroCount; k++) {
               column.push(0); 
            }
            // console.log(column);
            for(let k = 0; k<column.length; k++) {
               map[column.length - k-1][i] = column[k]
            }
            // console.log(map);
        }

        // break;
    }
    return answer;
}