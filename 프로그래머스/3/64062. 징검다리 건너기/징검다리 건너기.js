function solution(stones, k) {
    var answer = 0;
    
    let left = 1;
    let right = 200000000;
    
    while(left<=right) {
        const mid = Math.floor((left+right)/2);
        console.log(mid);
        let count = 0 ;
        for(let i = 0; i<stones.length; i++) {
            if(stones[i] - mid <= 0) {
                count++;
            }else {
                count = 0;
            }
            //수가 너무 커서, 안되는 거니까 줄여버려
            if(count == k) {
                right = mid-1;
                break;
            }
        }
        if(count < k) {
            answer = mid;
            left = mid+1;
        }
    }
    return answer+1;
}

//니니즈 친구들은 무제한

//stones는 길이가 20만 

//각 배열의 원소는 2억 이하