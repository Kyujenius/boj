function solution(records) {
    var answer = [];
    // 닉네임을 변경하면 변경한 닉네임으로 다 출력됨(한 번 뜨면 끝이 아님)
    let nickNameObj = {};
    
    //한 바퀴는 닉네임 바뀐 것만 다 체크하기
    
    records.forEach((record)=> {
        const [command, uid, nickname] = record.split(" ");
        if(command === "Enter" || command === "Change"){
            nickNameObj[uid] = nickname;    
        }
    })
    
    //한 바퀴는 그 닉네임으로 인 아웃을 작성하기 
    records.forEach((record)=> {
        const [command, uid, nickname] = record.split(" ");
        switch(command) {
            case "Enter":
                answer.push(`${nickNameObj[uid]}님이 들어왔습니다.`)
                break;
            case "Leave":
                answer.push(`${nickNameObj[uid]}님이 나갔습니다.`)
                break;                
        }
    })
    
    return answer;
}