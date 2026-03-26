function solution(n) {
    var answer = [];
    function hanoi(n,from,to) {
        if(n === 1) answer.push([from+1,to+1]);
        else if(from === 1&& to ===2) {
            hanoi(n-1,1,0);
            hanoi(1,1,2);
            hanoi(n-1,0,2);
        }else if(from ===2 && to ===1) {
            hanoi(n-1,2,0);
            hanoi(1,2,1);
            hanoi(n-1,0,1);           
        }
        else if(from ===2 && to ===0) {
            hanoi(n-1,2,1);
            hanoi(1,2,0);
            hanoi(n-1,1,0);           
        }
        else if(from ===1 && to ===0) {
            hanoi(n-1,1,2);
            hanoi(1,1,0);
            hanoi(n-1,2,0);           
        }
        else if(from ===0 && to ===2) {
            hanoi(n-1,0,1);
            hanoi(1,0,2);
            hanoi(n-1,1,2);           
        }
        else if(from ===0 && to ===1) {
            hanoi(n-1,0,2);
            hanoi(1,0,1);
            hanoi(n-1,2,1);           
        }
    }
    
    hanoi(n,0,2);
    return answer;
}