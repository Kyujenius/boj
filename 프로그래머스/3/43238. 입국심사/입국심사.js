function solution(n, times) {
    var answer = 0;
times.sort((a, b) => a - b);
let left = 1;
    let right = times[times.length - 1] * n; 
    
    while(left <= right) {
        mid = Math.floor((left+right)/2);
        let acc = 0;
        times.forEach((value)=> {
             acc += Math.floor(mid / value);
        })
        //숫자 하나찍어서,(10억 시작) 해당 숫자 / times 의 합들보다 작으면 mid = right; (N: 10만번 )
        if(acc >= n) {
            right = mid-1;
            answer = mid;
        }else {
            left = mid+1;
        }
        console.log(mid);
    }
    return answer;
}