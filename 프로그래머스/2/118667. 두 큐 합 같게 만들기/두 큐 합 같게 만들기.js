function solution(queue1, queue2) {
    var answer = -1;
    let sum1 = queue1.reduce((acc,cur)=>acc+=cur);
    let sum2 = queue2.reduce((acc,cur)=>acc+=cur);
    const total = sum1+sum2;
    
    // console.log(sum1,sum2,total);
    if(total % 2 !== 0) return -1;
    const target = total/2;
    let leftPtr = 0;
    let rightPtr = queue1.length;
    let count= 0;
    
    const combinedArr = [...queue1,...queue2];
    while(count < queue1.length * 4) {
        if(sum1 < target) {
            sum1 += combinedArr[rightPtr];
            rightPtr +=1;
            rightPtr = rightPtr % (queue1.length *2)
            count +=1;
        }else if(sum1 > target){
            sum1 -= combinedArr[leftPtr];
            leftPtr +=1;
            leftPtr = leftPtr % (queue1.length *2)
            count +=1;
        }else {
            return count;
        }
    }
    
    return answer;
}