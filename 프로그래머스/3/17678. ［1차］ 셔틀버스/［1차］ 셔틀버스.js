function solution(n, t, m, timeTableArr) {
    var answer = '';
    let busTime = 540;
    const crew = timeTableArr.map((value)=> {
        const [hour,minute] = value.split(":").map(Number);
        const time = hour * 60 + minute;
        return time
    }).sort((a,b)=>a-b);
    let answerStr = '';
    
    let crewIdx = 0;
    let lastCrewNum = 0;
    //각 버스가 오는 시간마다. 
    for(let i = 0 ; i <n; i++) {
        // console.log(`========${i} ==========`)
        let count = 0 ;
        while(count < m && crewIdx < crew.length && crew[crewIdx] <= busTime) {
            // console.log(`${crew[crewIdx]} 크루`);
            lastCrewNum = crew[crewIdx];
            count++;
            crewIdx++;
        }
        
        //막차면 이제 정해야지
        if(i === n-1) {
            //꽉 안 찼으면 그냥 차 올 때 타면 됩니다요
            if(count < m) {
                answerStr = busTime;
                // console.log(`꽉 안차서 ${busTime} 등록`);
            }
            
            //꽉 찼으면 그냥 마지막 시간보다만 1분 빨리타면 됩니다요
            if(count === m) {
                
                answerStr = lastCrewNum-1;
                // console.log(`꽉 차서 ${answerStr} 등록`);
            }
            
        }

        busTime += t;
    }
            
    const hour = Math.floor(parseInt(answerStr) / 60).toString().padStart(2,'0');;
    const minute = (parseInt(answerStr) % 60).toString().padStart(2,'0');
        
    answer = `${hour}:${minute}`;
    
    return answer;
}