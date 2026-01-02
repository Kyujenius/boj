function solution(book_time) {
    var answer = 0;
    const numBookArr = book_time.map(([start,end],index,array)=> {
        const startHour = parseInt(start.split(":")[0]);
        const startMinute = parseInt(start.split(":")[1]);
        const totalStart = startHour * 60 + startMinute;
        const endHour = parseInt(end.split(":")[0]);
        const endMinute = parseInt(end.split(":")[1]);
        const totalEnd = endHour * 60 + endMinute;
        
        return [totalStart,totalEnd+10];
    })
    numBookArr.sort((a,b)=> a[0]-b[0]);
    // console.log(numBookArr);
    const queue = [];
    numBookArr.forEach(([start,end],index,array)=> {
        queue.push(end);
        queue.sort((a,b)=>a-b);
        if(start < queue[0] && answer < queue.length) {
            answer++;
        }else if(start >= queue[0]) {
            queue.shift();
        }
        // console.log(queue);
    })
    return answer;
}