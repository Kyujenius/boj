function solution(prices) {
    var answer = [];
    
    prices.forEach((value,index,array) => {
        let count = 1;
        for(let i = index+1 ; i < array.length-1; i++) {
            if(value <= array[i]) {
                count ++;
            }else {
                break;
            }

        }
        answer.push(count);
    })
    answer.pop();
    answer.push(0);
    return answer;
}