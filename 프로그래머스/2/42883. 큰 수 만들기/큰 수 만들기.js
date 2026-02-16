function solution(number, k) {
    var answer = '';
    const stack = [];
    const numberArr = number.split("");
    for(let i = 0 ; i<numberArr.length; i++) {
        const number = numberArr[i];
        //들어있는 게 있다면?
        if(stack.length>0 && stack[stack.length-1] < number) {
            // console.log('더 크긴해서 k: ', k);
            while(stack[stack.length-1] < number && k>0) {
                stack.pop();
                k--;
            } 
            stack.push(number);
            // console.log("뺴버리고 난 뒤 stack", stack);
        }else {
            stack.push(number);    
            // console.log("그냥 채우고 난 뒤 stack", stack);
        } 
        // if(k ===0) break;
    }
    while(k>0) {
        stack.pop();
        k--;
    }
    return stack.join("");
}