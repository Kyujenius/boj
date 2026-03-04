function solution(n, results) {
    var answer = 0;
    const winLose = Array.from({length: n+1}, ()=> {
       return {win: [], lose:[]}
    })

    results.forEach(([winner,loser])=> {
        //이긴놈은 진놈한테 진놈도 다 이겼어.
        winLose[winner].win.push(loser);
        //진 놈은 이긴놈의 이긴놈한테도 졌어.
        winLose[loser].lose.push(winner);
    })
    // console.log(winLose);
    
    //한 선수마다 이기고 졌는지 쭉 파고들기
    winLose.forEach((person, index)=> {
        // console.log(`--------${index}-----------`)
        const winSet = new Set();
        const loseSet = new Set();
        const winQueue = [...person.win];
        const loseQueue = [...person.lose];
        // console.log(winQueue,loseQueue);
        //내가 이긴 사람들을 대상으로 queue 돌리기
        while(winQueue.length>0) {
            const loser = winQueue.shift();
            //루저 수집
            winSet.add(loser);
            //나한테 진사람들한테 또 진 놈들을 대상으로 
            winLose[loser].win.forEach((loseloser)=> {
                if(!winSet.has(loseloser)) {
                    winSet.add(loseloser);
                    winQueue.push(loseloser);
                }
            })
        }
        
        while(loseQueue.length>0) {
            const winner = loseQueue.shift();
            //위너 수집
            loseSet.add(winner);
            //나한테 이긴 사람들한테 또 이긴 놈들을 대상으로 난 지겠지
            winLose[winner].lose.forEach((winWinner)=> {
                if(!loseSet.has(winWinner)) {
                    loseSet.add(winWinner);
                    loseQueue.push(winWinner);
                }
            })
        }
        // console.log(index, winSet,loseSet);
        if(winSet.size + loseSet.size === n-1) {
            answer++;
        }
    })
    
    return answer;
}

//각각 1번부터 n번까지 번호를 받았습니다.
//만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다.
//하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.

//선수의 수는 1명 이상 100명 이하입니다.
//경기 결과는 1개 이상 4,500개 이하입니다.
