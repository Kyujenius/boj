function solution(arr) {
    var answer = [0,0];
    let n = arr.length;
    
    recursiveFn(0,0,n);
    
    function recursiveFn(startX, startY,n) {
        const num = arr[startY][startX];
        let isSuccess = true;
        //처음부터 끝까지 살핀다.         
        for(let i = 0 ; i<n; i++) {
            for(let j = 0 ; j<n; j++) {
                //가다가 다른 걸 확인해버린다? 
                if(num !== arr[startY +i][startX + j]) {
                    recursiveFn(startX, startY, n/2);
                    recursiveFn(startX, startY+n/2, n/2);
                    recursiveFn(startX+n/2, startY, n/2);
                    recursiveFn(startX+n/2, startY+n/2, n/2);
                    isSuccess = false;
                    break;
                }
            }
         if(!isSuccess) {
            answer[num]-=1;
            break;
         }
        }
        // console.log("끝",[startX,startY],n)
        answer[num]+=1;
    }
    return answer;
}