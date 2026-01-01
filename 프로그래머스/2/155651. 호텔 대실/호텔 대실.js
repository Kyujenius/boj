function solution(book_time) {
    //answer 은 가변하는 방의 수로 보는 것이 포인트같음 
    var answer = 0;
    
    // 일단 다 분으로 바꾸고, 바꾼 분에서 정렬까지 한 번 하고, 
    const numBook = book_time.map(([a,b])=> {
        const [aHour, aMinute] = a.split(":");
        const [bHour, bMinute] = b.split(":");
        
        const aTotal = parseInt(aHour) * 60 + parseInt(aMinute);
        const bTotal = parseInt(bHour) * 60 + parseInt(bMinute);
        
        return [aTotal,bTotal+10];
    }).sort((a,b)=>a[0]-b[0]);
    
    console.log(numBook);
    const queue = [];    
    // 앞에서부터 10분씩 뒷단에 더해서 하나씩 확인하다가,
    numBook.forEach(([start,end])=> {
        queue.push(end);
        queue.sort((a,b)=>a-b);
        //앞 타임과 뒷 타임이 안 맞고 && 방이 부족하면, 방의 수를 늘리기
        if(queue[0] > start && answer < queue.length) {
            answer++;
        }else if(queue[0] <= start){
            queue.shift();
            // console.log("발동은 되나?")
        }
        // console.log("queue",queue);
    })
    
    
    
    return answer;
}