function solution(diffs, times, limit) {
    var answer = 0;
    
    let left = 1; 
    let right = 100000000;
    
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        
        //가능해?
        if(makeResult(mid)) {
            // console.log(`mid:${mid}`);
            answer = mid;
            right = mid-1; 
        }
        //불가능해?
        else{
            left = mid+1;
        }
    }
    
    // 이분탐색 함수는 더 상위에서 그냥 while문 사용 
    

    //현재 퍼즐의 난이도를 diff, 현재 퍼즐의 소요 시간을 time_cur, 
    //이전 퍼즐의 소요 시간을 time_prev, 당신의 숙련도는 level

    // diff ≤ level이면 퍼즐을 틀리지 않고 time_cur만큼의 시간을 사용하여 해결합니다.
    // diff > level이면, 퍼즐을 총 diff - level번 틀리고,
    // 퍼즐을 틀릴 때마다, time_cur만큼의 시간을 사용, 추가로 time_prev만큼의 시간을 사용해 이전 퍼즐을 다시 풀고 와야함.

    // 이전 퍼즐을 다시 풀 때는, 이전 퍼즐의 난이도에 상관없이 틀리지 않습니다.
    // diff - level번 틀린 이후에, 다시 퍼즐을 풀면 time_cur만큼의 시간을 사용하여 퍼즐을 해결합니다.
    
    function makeResult(level) {
        let result = 0;
        let time_prev = 0;
        diffs.forEach((diff,index)=> {
            const time_cur = times[index];
            if(diff <= level) {
                result += time_cur;    
            }else {
                const wrongTimes = diff-level;
                result += (wrongTimes * (time_prev + time_cur) + time_cur);
            }
            // console.log(result);
            time_prev = time_cur;
        })
        if(result <= limit) {
            // console.log(`result: ${result}, limit:${limit}`);
            return true;
        }else {
            return false;
        }
    }
    
    
    
    
    return answer;
}


//1 ≤ diffs의 길이 = times의 길이 = n ≤ 300,000

// 시뮬레이션 + 이분 탐색이구나! 

