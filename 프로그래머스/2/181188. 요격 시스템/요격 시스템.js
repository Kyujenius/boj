function solution(targets) {
    var answer = 0;
    targets.sort((a,b)=>a[1]-b[1]);
    console.log(targets);
    let lastIdx = -1;
    targets.forEach(([start,end])=> {
        if(start > lastIdx) {
            answer++;
            lastIdx = end-1
        }
    })
    return answer;
}