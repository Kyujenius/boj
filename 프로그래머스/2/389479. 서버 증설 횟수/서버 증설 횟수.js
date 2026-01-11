function solution(players, m, k) {
    var answer = 0;
    let cap = 1;
    const queue = [];
    // (증설되어있는 서버 * m < 현재 게임 이용자 수) 일 때, 서버 증설 및 queue 에 넣기
    // queue의 구조 = [[증설된 수, 반납 시간]...]
    players.forEach((player,index,array)=>{
        //큐의 첫번째 시간이, 지금이라면?
        if(queue.length >0 && queue[0][1] ==index) {
            const [returnServer, returnTime] = queue.shift();
            cap -= returnServer;
        }
        const capacity = cap * m -1;
        
        if(player > capacity) {
            const plusServer = Math.ceil((player - capacity)/ m);
            answer +=plusServer;
            cap += plusServer;
            queue.push([plusServer,index+k]);
        }
        // console.log(queue);
    })
    return answer;
}