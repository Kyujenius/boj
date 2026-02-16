function solution(arr) {
    var answer = [0,0];
    let n = arr.length;
    
    const first = arr[0][0];
    quardCompress(0,0,n);
    function quardCompress(startX,startY,n) {
        let isWrong = false;
        const first = arr[startY][startX];
        
        if(n === 1) {
            if(first === 1) answer[1] +=1;
            if(first === 0) answer[0] +=1;
            return;
        }
        
        for(let i = startY; i<startY+n; i++) {
            for(let j = startX; j<startX+n; j++) {
                if(first !==arr[i][j]) {
                    quardCompress(startX,startY,n/2);
                    quardCompress(startX,startY+n/2,n/2);
                    quardCompress(startX+n/2,startY,n/2);
                    quardCompress(startX+n/2,startY+n/2,n/2);
                    isWrong = true;
                }
                if(isWrong) break;
            }
            if(isWrong) break;
        }
        
        if(!isWrong) {
            if(first === 1) answer[1] +=1;
            if(first === 0) answer[0] +=1;    
        }
        

        
        
    }
    
    return answer;
}