function solution(arr) {
    var answer = [];
    let n = arr.length;
    let zeroCount = 0;
    let oneCount = 0;
    function divideNCount(startX,startY,n) {
        const char = arr[startY][startX] ;
        let isSame = true;
        for(let i = startX ; i < startX + n ; i++) {
            for (let j = startY; j <startY+n; j++) {
                if(char !== arr[j][i]) {
                    isSame = false;
                }
            }
            if(!isSame) break;
        }
        if(isSame && char === 0) {
            zeroCount++;
        }
        if(isSame && char === 1) {
            oneCount++;
        }
        if(!isSame) {
            divideNCount(startX,startY,n/2)
            divideNCount(startX + n/2,startY,n/2)
            divideNCount(startX + n/2,startY + n/2,n/2)
            divideNCount(startX,startY + n/2,n/2)
        }      
    }
    divideNCount(0,0,n);
    return [zeroCount,oneCount];
}

