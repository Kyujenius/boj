function solution(jobs) {
    var answer = 0;
    const heap = [];
    const n = jobs.length;
    //jobs를 일단 시작 시간에 따라서, 정렬을 한다. 
    jobs.sort((a,b)=>a[0]-b[0]);
    let playing = {
        index: 0,
        startTime:0,
        playTime:0,
        endTime:0,
    }
    let index = 0;
    //for문으로 처음부터 끝까지 숫자를 센다. 1000 * 1000 을 넘기면 됨
    for(let i=0; i<1000005; i++) {
        // console.log(playing);
//         console.log(`heap: ${heap}`);
        
        if(playing.playTime >0) {
            playing.playTime--;
        }
        if(playing.endTime === i) {
            answer += (playing.endTime - playing.startTime);
            // console.log(answer);
        }
        //각 시간마다, jobs의 0번째 인자랑 비교해서, 같으면 heap에 넣는다.
        while(jobs.length> 0 && jobs[0][0] === i) {
            const job = jobs.shift();
            const parsedJob = {
                                index: index++,
                                startTime:job[0],
                                playTime:job[1]
                              };
            
            heap.push(parsedJob);
            heap.sort((a,b)=>{
                if(a.playTime === b.playTime) {
                    //작업의 요청 시각이 빠른 것
                    if(a.startTime === b.startTime) {
                        return a.index- b.index
                    }else {
                        return a.startTime - b.startTime;   
                    }
                }
                //작업의 소요시간이 짧은 것
                return a.playTime - b.playTime
            });
        }
        if(playing.playTime ===0 && heap.length>0) {
            const startToPlay = heap.shift();
            playing = {
                index: startToPlay.index,
                startTime:startToPlay.startTime,
                playTime:startToPlay.playTime,
                endTime: i+startToPlay.playTime
            }
        }
        if(playing.playTime === 0 && jobs.length === 0 && heap.length ===0) break;
        //playing이 비어있으면 heap 에서 하나 꺼내온다.       
    }
    //
    return Math.floor(answer/n);
}

//디스크 컨트롤러는 하드디스크가 작업을 하고 있지 않아야한다.
//대기 큐가 비어있어야한다. 
//그 때, 가장 우선순위가 높은 작업을 대기 큐에서 꺼내서 하드디스크에 그 작업을 시킵니다.

//우선순위 : 작업의 소요시간이 짧은 것, 작업의 요청 시각이 빠른 것, 작업의 번호가 작은 것 순으로 우선순위가 높습니다
//마치는 들어오는 시간이 겹치면, 들어오고, 다시 재연산



//1 ≤ jobs의 길이 ≤ 500
