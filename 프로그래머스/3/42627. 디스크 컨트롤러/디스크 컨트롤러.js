function solution(jobs) {
    let answer = 0 ;
    const priorityQueue = [];
    const length = jobs.length;
    let doingJob = null;
    // 일단 매초마다 돌아가는 for문 하나 두기
    jobs.sort((a,b)=>a[0]-b[0])
    for(let i = 0 ; i<1000000; i++) {
        // console.log(`==========${i}=========`);
        // 해당 for문 내에서 jobs[0][0] 이 i와 더이상 같지 않을때까지 shift() 해서 queue에다가 넣어두기 
        while(jobs.length > 0 && jobs[0][0] == i) {
            const [startTime, jobTime] = jobs.shift()
            priorityQueue.push({startTime: startTime,jobTime: jobTime});
        }
        // 들어가있는 queue에서 시간이 짧은 것으로 정렬
        priorityQueue.sort((a,b)=> {
            if(a.jobTime === b.jobTime) {
                return a.startTime - b.startTime;
            }
            return a.jobTime - b.jobTime;
        })
        
        // console.log(`priorityQueue : ${priorityQueue}`);
        // console.log(`doingJob : ${doingJob}`);

        
        if(doingJob !== null && i === doingJob.endTime) {
            // console.log(`answer 에다가 += ${doingJob.endTime - doingJob.startTime}`);
            answer += (doingJob.endTime - doingJob.startTime);
            doingJob = null;
        }
        
        if(doingJob === null && priorityQueue.length >0) {
            const {startTime: startDoingJob, jobTime: doingJobTime} = priorityQueue.shift();
            doingJob = {
                startTime : startDoingJob,
                endTime : i + doingJobTime
            };
        }
        // 각 작업이 끝날 시점을 정해놓고, doingJob을 계속 돌리기 끝날 시점에는 걸린 시간 계산해서 넣어버리기 
        // answer를 최종적으로 jobs의 길이로 나누기 
        
        if(jobs.length === 0 && priorityQueue.length === 0 && doingJob === null) break;
    }
    return Math.floor(answer / length) ; 
}











