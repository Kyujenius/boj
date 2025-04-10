function solution(arr)
{
    var answer = [];
    while(arr.length > 0) {
        const popped = arr.pop();        
        if(answer[answer.length-1] !== popped) {
            answer.push(popped)
        }
    }
    
    
    return answer.reverse();
}