function solution(participant, completion) {
    var answer = '';
    let object = {};
    participant.forEach((value) => {
        if(!object[value]) {
            object[value] = 1;
        }else {
            object[value] += 1;
        }
    })
    completion.forEach((value) => {
        object[value] -= 1;
    })
    const entries = Object.entries(object).filter(([key,value])=> {
        return value >=1;
    })
    answer = entries[0][0];
    
    
    return answer;
}