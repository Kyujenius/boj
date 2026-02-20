function solution(stones, k) {
    var answer = 0;
    let left =1;
    let right = 200000000;
    
    while(left<=right) {
        const mid = Math.floor((left+right)/2);
        let count = 0;
        for(let i = 0; i<stones.length; i++) {
            const stone = stones[i];
            if(stone <= mid) {
                count++;
                if(count === k) {
                    // console.log("같아서 break");
                    break;
                }
            }else {
                count = 0;
            }
        }
        if(count === k) {
            // console.log("answer = mid", mid);
            right = mid -1;
            answer = mid;
        }
        if(count < k) {
            left = mid + 1;            
        }
        
    }
    return answer;
}