function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    
    function canJumpRoad (n) {
        let cnt = 0;
        for(let i = 0 ; i<stones.length ; i++) {
            if(stones[i] < n) {
                cnt++;
                if(cnt >= k) return false;
            }else {
                cnt = 0;
            }   
        }
        
        return true;
    }
    
    while(left<=right) {
        const mid = Math.floor((left+right)/2);
        if(canJumpRoad(mid)) {
            left = mid+1;
        }else {
            right = mid-1;
        }
        // console.log(mid);
    }
    
    return right;
}


