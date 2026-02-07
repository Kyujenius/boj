function solution(jobs) {
    const priorityQueue = [];
    let doingJob = null;
    let deadTime = 0;
    var answer = 0;
    jobs.sort((a, b) => a[0] - b[0]);
    const length = jobs.length;
    //for 문이 돌아가며 각 시점을 체크한다.
    for(let i = 0; i<= 1000000; i++ ){
        // console.log(`===========${i} 번째 시점===========`);
        //jobs 가 있고,
        //각 jobs 에서 요구하는 시작 시점이 지금 시점과 같으면 일단 priorityQueue 에 넣는다.
        while (jobs.length > 0 && jobs[0][0] === i) {
            priorityQueue.push(jobs.shift());
        }
        
        //priorityQeuue에서 요구사항에 맞게 정렬해둔다. (들어와있는 것들 대상으로 시간)
        priorityQueue.sort((a,b)=> {
            if(a[1]  === b[1]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
        
        // console.log(`priorityQueue: ${priorityQueue}`);
        
        //시작한 일이 있고, 죽을 때가 됐다면,
        if(doingJob !== null && deadTime === i) {
            // console.log(`deadJob: ${doingJob}, deadTime == i = ${deadTime}`);
            answer += deadTime - doingJob[0];
            // console.log(`answer += ${deadTime - doingJob[0]}`)
            doingJob = null;
            deadTime = 0;
        }
        
        //비어있으면 넣는다. 
        if(doingJob === null && priorityQueue.length >0) {
            doingJob = priorityQueue.shift();
            deadTime = i + doingJob[1];
            // console.log(`doingJob : ${doingJob}, deadTime = ${deadTime}`);
        }
        
        
        
        if(priorityQueue.length === 0 && jobs.length === 0 && doingJob == null) break;
    }
    return Math.floor(answer / length);
}
// 작업의 소요시간이 짧은 것, 작업의 요청 시각이 빠른 것, 작업의 번호가 작은 것 순으로 우선순위가 높습니다.