function solution(stones, k) {
    var answer = 0;
    
    function canGo(n) {
        let count = 0 ;
        for(let i = 0 ; i<stones.length; i++ ) {
            if(stones[i] < n) {
                count++;
                if(count >= k) {
                    return false;
                }
            }else {
                count = 0;
            }
        }
    
        return true;
    }
    
    let left =1;
    let right = 200000000;
    
    while(left<=right) {
        const mid = Math.floor((left+right)/2);
        // console.log(mid);
        if(canGo(mid) == true) {
            left = mid+1;
        }else {
            right = mid -1;
        }
    }
    
    return right;
}

