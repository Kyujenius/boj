function solution(n, times) {
    var answer = 0;
    times.sort((a,b)=>a-b);
    let maxValue = times[times.length-1] * n;
    
    let left = 0;
    let right = maxValue;
    
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        const value = times.reduce((acc,cur) => acc += Math.floor(mid / cur),0);
        if(value > n) {
            right = mid-1;
        }else if(value === n) {
            answer = mid;
            right = mid-1;
        }else{
            left = mid +1;
        }
        console.log(mid);
    }

    
    return left;
}