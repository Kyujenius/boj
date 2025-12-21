function solution(records) {
    var answer = [];
    const nicknameObj = {};
    
    records.forEach((record)=> {
        const splittedRecord = record.split(" ");
        // console.log(splittedRecord)
        const [command,uid,nickName] = splittedRecord
            if(command === "Enter" || command === "Change") {
                nicknameObj[uid] = nickName;        
            }
        }
    );
 
    // console.log(nicknameObj);
    
    records.forEach((record)=> {
            const splittedRecord = record.split(" ");
            const [command,uid,nickName] = splittedRecord;
            // console.log(command,uid,nickName);
            switch(command) {
                case "Enter":
                    answer.push(`${nicknameObj[uid]}님이 들어왔습니다.`)
                    break;
                case "Leave":
                    answer.push(`${nicknameObj[uid]}님이 나갔습니다.`);
            }
    });
    
    return answer;
}