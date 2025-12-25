function solution(queue1, queue2) {
    var answer = -2;
    let sumOne = 0;
    let sumTwo = 0;
    queue1.forEach((value)=> {
        sumOne+=value;
    })
    queue2.forEach((value)=> {
        sumTwo += value;
    })
    let total  = sumOne + sumTwo;
    if(total % 2 ===1) return -1;
    let target  = total / 2;
    
    // console.log(target);
    const combinedQueue = [...queue1, ...queue2];
    // console.log(combinedQueue);
    let p1 = 0;
    let p2 = queue1.length;
    let count = 0 ;
    let maxCount = queue1.length * 4;
    //최대 횟수 옮겨도 안 되면 -1 리턴
    while(count < maxCount) {
         //queue1 에서 queue2로 옮길 때,
        if(sumOne == target) return count;
        if(sumOne > target) {
            sumOne -= combinedQueue[p1];
            const pushed = combinedQueue[p1];
            p1 = (p1 + 1) % combinedQueue.length; // 원형 큐처럼 동작;
            count++;
        }else {
        //queue2 에서 queue1로 옮길 때
            sumOne += combinedQueue[p2];
            const pushed = combinedQueue[p2];
            p2 = (p2 + 1) % combinedQueue.length; // 원형 큐처럼 동작;
            count++;
        }
    }
   
    return -1;
}