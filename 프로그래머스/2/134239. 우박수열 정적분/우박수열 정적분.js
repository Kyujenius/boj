function solution(k, ranges) {
    var answer = [];
    const yArr = [];
    yArr.push(k);
    
    while(k !== 1) {
        if(k%2 ===0) k/=2;
        else k=k*3+1;
        yArr.push(k);
    }
    // console.log(yArr);
    /**
      0 이상의 수 b에 대해 [a, -b]에 대한 정적분 결과는 x = a, x = n - b, y = 0 으로 둘러 쌓인 공간
    */
    ranges.forEach(([from,to])=> {
        // console.log("---------",from,to,"---------")
        let result =0;
        if(to <=0) to = yArr.length-1 + to;
        if(from > to) {
            answer.push(-1);
            return;
        }
        for(let x= from; x<to; x++) {
            // console.log(`x0:${x}, x1:${x+1}, y:${yArr[x]}, y1:${yArr[x+1]}`);
            // console.log(Math.abs(yArr[x+1] - yArr[x])/2 + Math.min(yArr[x+1],yArr[x]));
           result += Math.abs(yArr[x+1] - yArr[x])/2 + Math.min(yArr[x+1],yArr[x]);
        }
        
        // console.log(result)
        answer.push(result);
    })

    return answer;
}