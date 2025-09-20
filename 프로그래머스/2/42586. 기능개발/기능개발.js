function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];
    let j = 0;
    
    for(let i = 0; i< days.length; i++){
        //가장 큰 날보다 크거나 같으면 answer[j] 값 +1
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
        //가장 큰 날보다 작으면 answer[j] 값 +1
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
