function solution(diffs, times, limit) {
    let left = 1;
    let right = 100000;
    
    //30만이라 n^2은 하면 안 됨. -> 이분탐색이다 이거
    while(left <= right) {
        const level = Math.floor((left + right) / 2);
        // console.log(level);
        let myLimit = times[0];
        //1부터 해버려 걍
        for(let i=1; i<diffs.length; i++) {
            const diff = diffs[i];
            const beforeTime = times[i-1];
            const time = times[i];
            if(level >= diff) {
                // console.log(`level ${level} > diff${diff} - time${time} 더하기`)
                myLimit += time;
            }else {
                const realTime = diff - level;
                myLimit += (((time + beforeTime) * realTime) + time)
            }
            
            //한 차례 더하고 limit 를 넘기면 mid를 줄여야지
            if(myLimit > limit) {
                left = level +1;
                break;
            }
        }
        
        if(myLimit <= limit) right = level -1;        
    }
    
    return left;
}


/**
*
현재 퍼즐의 난이도를 diff, 현재 퍼즐의 소요 시간을 time_cur, 
이전 퍼즐의 소요 시간을 time_prev, 당신의 숙련도를 level이라 하면, 게임은 다음과 같이 진행됩니다.

//level = 1이면, 퍼즐을 3 - 1 = 2번 틀립니다. 한 번 틀릴 때마다 2 + 4 = 6

diff ≤ level이면 퍼즐을 틀리지 않고 time_cur만큼의 시간을 사용하여 해결합니다.
diff > level이면, 퍼즐을 총 diff - level번 틀립니다. 퍼즐을 틀릴 때마다, 
time_cur만큼의 시간을 사용하며, 추가로 time_prev만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야 합니다.
이전 퍼즐을 다시 풀 때는 이전 퍼즐의 난이도에 상관없이 틀리지 않습니다. 
diff - level번 틀린 이후에 다시 퍼즐을 풀면 time_cur만큼의 시간을 사용하여 퍼즐을 해결합니다.
*
*/