function solution(prices) {
    var answer = [];
    const arrLength = prices.length;
    prices.forEach((value,index,array)=> {
        let counter =0;
        for(let i = index+1; i<arrLength; i++) {
            if(value <= array[i]) {     
                counter ++;    
                // console.log("counter up", counter);
            }else {
                    counter++;
                break;
            }
        }
        answer.push(counter);

    })
    return answer;
}