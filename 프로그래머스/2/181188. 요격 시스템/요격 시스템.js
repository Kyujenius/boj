function solution(targets) {
    var answer = 0;
    targets.sort((a,b)=>a[1]-b[1]);
    // console.log(targets);
    let lastTarget = -1;
    for(let i=  0 ; i<targets.length; i++) {
        const [start,end] = targets[i]
        //타겟이 
        if(lastTarget > start && lastTarget <end) {
            continue;
        }else {
            lastTarget = end - 0.5;
            answer++;
        }
    }
    return answer;
}