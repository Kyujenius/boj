function solution(m, musicinfos) {
    //조건이 일치하는 음악이 없을 때에는 “(None)”을 반환한다.
    var answer = '(None)';
    
    const candidate = [];
    musicinfos.forEach((value, index)=> {
        const [startTime,endTime,songName,madi] =  value.split(",");
        const [startHour,startMinute] = startTime.split(":").map(Number);
        const [endHour,endMinute] = endTime.split(":").map(Number);
        
        const start = startHour * 60 + startMinute;
        const end = endHour * 60 + endMinute;
        
        const playTime = end - start;
        // console.log(`madi : ${madi}, playTime : ${playTime}`);
        //madi 변환 
        const replacedMadi = replace(madi);
        
        //변환한 madi 다시 쪼개기
        const splittedMadi = replacedMadi.split("");
        
        //쪼갠 마디 playTime 동안 넣을 배열
        const listenedSong = [];
        
        for(let i = 0 ; i<playTime; i++) {
            listenedSong.push(splittedMadi[i % splittedMadi.length]);
        }
        
        const finalSong = listenedSong.join("");
        const replacedM = replace(m);

        // console.log(`replacedSong: ${replacedSong}, replacedM: ${replacedM}`);
        // console.log('---------------');
        if(finalSong.includes(replacedM)) candidate.push({songName, playTime, index});

    })
    // console.log(candidate);
    // 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다.
    // 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.

    // 가장 길이가 
    if(candidate.length === 1){
        answer = candidate[0].songName;
    }else if(candidate.length >= 2) {
        candidate.sort((a,b)=> {
            return b.playTime - a.playTime; 
        })
        
        const filteredCandidate = candidate.filter((value)=> value.playTime === candidate[0].playTime);
        filteredCandidate.sort((a,b)=> {
            return a.index - b.index;
        })
        
        answer = filteredCandidate[0].songName;
    }else if(candidate.length ===0) {
        return "(None)";
    }
    return answer;
}

function replace(str) {
    return str.replace(/C#/g,'c')
            .replace(/D#/g,'d')
            .replace(/E#/g,'e')
            .replace(/F#/g,'f')
            .replace(/G#/g,'g')
            .replace(/A#/g,'a')
            .replace(/B#/g,'b')
    }




