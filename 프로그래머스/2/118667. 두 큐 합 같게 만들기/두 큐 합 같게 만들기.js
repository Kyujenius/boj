function solution(queue1, queue2) {
    var answer = -1;
    const combinedQueue = [...queue1, ...queue2];
    let leftSum = queue1.reduce((acc,cur)=> acc += cur, 0);
    let rightSum = queue2.reduce((acc,cur)=> acc += cur, 0);
    console.log(leftSum,rightSum);
    // if(leftSum === rightSum)
    let count = 0;
    let leftPtr = 0 ;
    let rightPtr = queue1.length;
    while(count < combinedQueue.length * 4) {
        // if(leftPtr === rightPtr) {
        //     return -1;
        // }
        //왼쪽 오른쪽이 같으면 stop 하고 카운트를 return 한다.
        if(leftSum === rightSum) {
            return count;
        }
        //오른쪽이 크면 오른 쪽 거 포인터를 하나 옮기고, 
        //leftSum 에는 더하기를 rightSum에는 빼기를 한다.
        if(leftSum < rightSum) {
            
            const temp = combinedQueue[rightPtr];
            
            leftSum += temp;
            rightSum -= temp;
            // console.log(`오른쪽이 더 커서 ${temp} 왼쪽으로 옮김`);
            // console.log(`leftSum :${leftSum}, rightSum: ${rightSum}`);
            rightPtr = (rightPtr +1) % (combinedQueue.length);
        }else {
            //왼쪽이 크면 왼쪽 거 포인터를 하나 옮기고, 
            //leftSum 에는 빼기를 rightSum에는 더하기를 한다.
             const temp = combinedQueue[leftPtr];
            leftSum -= temp;
            rightSum += temp;
            // console.log(`왼쪽이 더 커서 ${temp} 오른쪽으로 옮김`);
            // console.log(`leftSum :${leftSum}, rightSum: ${rightSum}`);
            leftPtr = (leftPtr +1) % (combinedQueue.length);
        }

        count++;
    }    
    return answer;
}