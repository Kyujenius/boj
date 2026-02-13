function solution(n, t, m, timetable) {
    const crew = timetable.map((time)=> {
        const [hour,minute] = time.split(":").map(Number);
        const totalMinute = hour * 60 + minute;
        return totalMinute;
    }).sort((a,b)=> a-b);
    
    // console.log(crew);
    let busTime = 540;
    let crewIdx = 0;
    let lastCrewTime = 0;
    let lastTime = 0;
    //9시를 기준으로 각 t분마다. n 번, 태울 차가 온다.
    for(let i = 0 ; i<n; i++) {
        let count = 0 ;
        
        //각 크루들을 추적하는 CrewIdx 가 넘치지 않았고, 제 시간에 온 crew 들에 한해서, 버스가 태울 수 있는 바운더리 안이면 계속 태운다.
        while(crewIdx < crew.length && crew[crewIdx] <= busTime  && count < m) {
            // console.log(`lastCrewTime: ${crew[crewIdx]}`);
            lastCrewTime = crew[crewIdx];
            crewIdx++;
            count++;
        }
        
        //마지막 버스면, 
        if(i == n-1) {
            //가득 채워서 왔으면 그 시간보다는 적게
            if(count === m) {
                // console.log(`가득 채워서 왔어`)
                lastTime = lastCrewTime -1;
            }else if(count < m) {
                // console.log(`부족하게 왔어`)
            //안 가득 찼으면 그냥 busTime에다가
                lastTime = busTime;
            }else {
                // console.log("그럴 수 없어");
            }
        }
        
        
        busTime += t;
    }
    
    const hour = Math.floor(lastTime / 60).toString().padStart(2,'0');;
    const minute = (lastTime % 60).toString().padStart(2,'0');
    
    const answer = `${hour}:${minute}`;
    return answer;
}