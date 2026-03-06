function solution(plans) {
    var answer = [];
    
    //킵해두는 건 계속 쌓이겠다.
    //멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작합니다. -> Stack
    const keepStack = [];
    let doingJob = "";
    //name이 중복되는 원소는 없습니다.
    //모든 과제의 시작 시각은 달라서 겹칠 일이 없습니다.
    //배열은 시간순으로 정렬되어 있지 않을 수 있습니다. -> 정렬 해야함
    plans.sort((a,b)=> hhmm2Minute(a[1]) - hhmm2Minute(b[1]));
    
    const startTime = hhmm2Minute(plans[0][1]);
    const endTime = hhmm2Minute("23:59");
    
    const realPlans = plans.map((plan)=> {
        const [name,startTime,playTime] = plan;
        return {
            name,
            startTime : hhmm2Minute(startTime),
            playTime : parseInt(playTime)
        }
    })
    // console.log(realPlans);
    keepStack.push(realPlans.shift());
    for(let i = startTime; i<=999999999; i++) {
        // console.log(`time[${i}] ------ \n `)
        // console.log(keepStack);
        // console.log(realPlans);
        //keepStack이 하나라도 있고, 0이라면
        if(keepStack.length>0 && keepStack[keepStack.length-1].playTime === 0) {
            const doneJob = keepStack.pop()
            answer.push(doneJob.name);
        }
        
        //남아있는 할 일들이 있고, 현재 다음 plan의 시작시간이라면?
        if(realPlans.length>0) {
            const nextPlanStartTime = realPlans[0].startTime;
            if(i === nextPlanStartTime) {
                //다음 Plan의 시작시간이면 시작해야해
                keepStack.push(realPlans.shift());
            }
        }
        
        
        //하나라도 있을 때면
        if(keepStack.length>0) {
            keepStack[keepStack.length-1].playTime -= 1;
        }
        
        
        if(keepStack.length ===0 && realPlans.length ===0 ) {
            break;
        }
        
        
    }
    

    return answer;
}
function hhmm2Minute(hhmm) {
    let minute = 0;
    const [hh,mm] = hhmm.split(":").map(Number);
    minute = hh* 60 + mm;
    return minute;
}

// 킵해둔 것보다 새로운 과제를 먼저함!
// 할 게 없으면 킵해둔 것 함!