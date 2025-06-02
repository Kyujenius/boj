function solution(prices) {
    var answer = [];
    prices.forEach((price, index, arr)=> {
        const stack = [] ;
        for(let i = index; i<arr.length-1; i++) {
            stack.push(arr[i+1])
            if(price > arr[i+1]) {
                break;
            }
        }
                        answer.push(stack.length);

    })
    return answer;
}