function solution(number, k) {
    var answer = '';
    const stack = [];
    const splittedNumber = number.split("").map((value)=>parseInt(value));
    
    for(let i = 0 ; i<splittedNumber.length; i++) {
        if(stack.length === 0) {
            stack.push(splittedNumber[i]);   
        }else if(stack[stack.length-1] >= splittedNumber[i]) {
            stack.push(splittedNumber[i]);
        }
        else{
            while(stack[stack.length-1] < splittedNumber[i] && k>0) {
                stack.pop();
                k--;
            }
            stack.push(splittedNumber[i]);
        }
    }
    for(let i=  0 ; i<k; i++) {
        stack.pop();
    }
    return stack.join("");
}