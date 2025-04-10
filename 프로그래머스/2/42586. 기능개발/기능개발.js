function solution(progresses, speeds) {
    var answer = [];
    let days = [];
    let shifted = 0;
    for(let i = 0 ; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i])/speeds[i]));
    }
    let count =0;
    while(days.length >0) {
        shifted = Math.max(shifted, days.shift());
        count++;
        if(shifted >=days[0]) {
            continue;
        }else {
            answer.push(count)
            count=0;
        }
    }
    return answer;
}