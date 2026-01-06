function solution(players, m, k) {
    var answer = 0;
    let cap = 0;
    const queue = [];
    players.forEach((player,index,array)=> {
        // 반납 시간이면, 
        if(queue.length >0 && queue[0][1] === index) {
            const [증설횟수, 반납시간] = queue.shift();
            cap-= 증설횟수;
        }
        
        const capacity = cap * m;
        //capacity 가 6이면
        if(player > capacity) {
            const diff = player - capacity ;
            const plusCap = Math.floor(diff /m)
            cap += plusCap;
            queue.push([plusCap,index+k]);
            answer += plusCap;
        }
        // console.log(queue);
    })
    return answer;
}

//각 players 가 있는 index 가 시간대    
//m 보다 높다? (index + k) 까지 증설해두고있고, answer++;
//queue 를 [[증설횟수, 반납 시간]...] 로 관리하자. 