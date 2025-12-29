function solution(number, k) {
    var answer = '';
    const stack = [];
    const numArray = number.split("");
    
    numArray.forEach((value) => {
        //stack의 마지막 숫자보다 크고, k도 남아있어?
        while(stack[stack.length-1] < value && k >0) {
            stack.pop();
            k--;        
        }
        stack.push(value);
    })
    for(let i = 0 ; i<k; i++) {
        stack.pop();
    }
    answer = stack.join('');
    
    return answer;
}