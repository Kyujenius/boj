function solution(arr)
{
    let stack = [];
    arr.forEach((value,index) => {
        if(stack[stack.length-1] != value) {
            stack.push(value)    
        }
    })
    return stack;
}