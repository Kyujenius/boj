function solution(priorities, location) {
    var answer = 0;
    const priorityArray = [];
    let mineNumber = 0;
    priorities.forEach((value,index) => {
        priorityArray.push({
            "number" : value,
            "isMine" : index === location
        })
        if(index === location) {
            mineNumber = value;
        }
    });
    
    while(true) {
        const obj = priorityArray.shift();
        if(priorityArray.some((value) => obj.number < value.number)) {
           priorityArray.push(obj);
        }else {
           answer++;
           if(obj.isMine) {
               return answer;
           }
        }
    }
    
    
    
    
    
    return answer;
}