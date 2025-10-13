function solution(priorities, location) {
    var answer = 0;
    const priorityArray = [];
    priorities.forEach((value,index)=> {
        priorityArray.push({
                priority : value,
                isMine : index === location
        })
    })
    console.log(priorityArray);
    
    let counter = 0;
    
    while(priorityArray.length>0) {
        const shifted = priorityArray.shift();
        //더 큰 게 하나라도 있으면
        if(priorityArray.some((value)=> shifted.priority < value.priority)) {
            priorityArray.push(shifted);
        }else {
            counter++;
            // console.log(priorityArray);
            if(shifted.isMine == true) {
                return counter;
            }
        }

    }
    
    return answer;
}