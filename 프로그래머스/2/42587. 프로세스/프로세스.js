function solution(priorities, location) {
    // value 와 내 거인지 아는 list 생성
    let list = priorities.map((value,index)=>({
        isMine : index === location,
        value : value
    }));
    
    let count = 0;        
    console.log(list);
    while(true){
       const current = list.shift();
        if(list.some((t)=> t.value > current.value)) {
            list.push(current);
        }else {
            count++;
            if(current.isMine) {
                return count;
            }
        }
    }
}


