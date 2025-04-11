function solution(schedules, timelogs, startday) {
    let N = schedules.length;
    let countArray = Array(N).fill(true);
    
    for (let k = 0; k < N; k++) {
        // 마감 시간 계산 (시간 형식 올바르게 처리)
        let hour = Math.floor(schedules[k] / 100);
        let minute = schedules[k] % 100;
        minute += 10;
        if (minute >= 60) {
            hour += 1;
            minute -= 60;
        }
        let deadTime = hour * 100 + minute;

        for (let i = 0; i < 7; i++) {
            const arrivedTime = timelogs[k][i]; 
            // startday가 1(월요일)~7(일요일)임
            const day = (i + startday - 1) % 7 + 1; // 1(월)~7(일)
            const isWeekend = (day == 6 || day == 7); // 토요일(6) 또는 일요일(7)
            
            // 평일에 마감 시간보다 늦게 출근했으면 false
            if (deadTime < arrivedTime && !isWeekend) {
                countArray[k] = false;
            }
        }    
    }
    
    // true로 남아있는 직원 수 계산
    return countArray.filter(value => value === true).length;
}
