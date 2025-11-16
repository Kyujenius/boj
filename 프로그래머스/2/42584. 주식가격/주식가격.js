function solution(prices) {
    var answer = [];
    
    prices.forEach((value,index,array) => {
        let counter = 0;
        for(let i = index +1; i<array.length ; i++) {
            counter++;
            if(array[i] < value) {
                break;
            }
        }
        answer.push(counter);
    })
    return answer;
}