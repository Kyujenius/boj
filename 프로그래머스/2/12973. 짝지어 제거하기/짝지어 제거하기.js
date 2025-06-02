function solution(s)
{
    const sArray = s.split("");
    const N = sArray.length;
    const stack = [];
    for(let i=  0 ; i<N; i++) {
        stack.push(sArray[i])
        if(stack[stack.length-1] === stack[stack.length-2]  && stack[stack.length-1] !== undefined) {
            stack.pop();
            stack.pop();
        }
    }
    if(stack.length == 0) {
        return 1;
    }else {
        return 0;
    }
    
    
    
    var answer = -1;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}