function solution(prices) {
    var answer = [];
    prices.forEach((value,index,array) => {
        //value 보다 더 큰 가격이 있는지 확인해야함.
        // console.log(value,index,array);
        let count = 1;
        for(let i = index+1; i < array.length-1; i++) {
            if(value <= array[i]) {
                count++;
            }else {
                break;
            }
        }
        if(array.length-1 == index) {
            answer.push(0);    
        }else {
            answer.push(count);    
        }
        


    })
    return answer;
}