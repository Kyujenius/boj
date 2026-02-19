function solution(players, m, k) {
    var answer = 0;
    let playerIdx = 0;
    const dynamicServer = [];
    let capacity = 0;
    while (playerIdx < players.length) {
        // console.log(`------${playerIdx}------`);
        // console.log(dynamicServer);
        const player = players[playerIdx];
        
        if(dynamicServer.length > 0  && dynamicServer[0][1] === playerIdx) {
            const [number, index] = dynamicServer.shift();
            capacity -= number;
        }
        
        //player 수가 지금 내가 넣어둔 capacity 보다 + m 보다도 더 크면
        if((capacity+1) * m <= player) {
            const addCap = Math.floor((player - (capacity) * m )/m);
            answer+= addCap;
            capacity += addCap;
            
            dynamicServer.push([addCap,playerIdx + k]);
        }
        playerIdx++;
        
        
    }
    return answer;
}