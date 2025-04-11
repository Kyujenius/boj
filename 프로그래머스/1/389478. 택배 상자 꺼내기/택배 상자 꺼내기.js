function solution(n, w, num) {
    // 22 개의 박스를 , 6의 width로 쌓았을 때, 8번째 박스를 꺼내려면 드는 횟수 구하기
    var answer = 0;
    let numHeight = Math.ceil(num / w );
    let numPosition = num % w ;
    let ceilHeight = Math.ceil(n / w );
    let ceilPosition = n % w ;
    
    if(numPosition == 0) {
        numPosition = w;
    }
    
    if(ceilPosition == 0) {
        ceilPosition = w;
    }
    //짝수번째면 position의 위치를 바꿔버려
    
    if(numHeight %2 == 0  && ceilHeight %2 ==0) {
        if(ceilPosition >= numPosition) {
            answer = ceilHeight - numHeight +1;
        }else {
            answer = ceilHeight - numHeight;
        }
        
    }else if(numHeight %2 !== 0  && ceilHeight %2 !==0) {
        if(ceilPosition >= numPosition) {
            answer = ceilHeight - numHeight +1;
        }else {
            answer = ceilHeight - numHeight;
        }
    }
    else if(numHeight %2 == 0  && ceilHeight %2 !==0) {
        if(ceilPosition + numPosition > w) {
            answer = ceilHeight - numHeight +1;
        }else {
            answer = ceilHeight - numHeight;
        }
    }
    else if(numHeight %2 !== 0  && ceilHeight %2 ==0) {
        if(ceilPosition + numPosition > w) {
            answer = ceilHeight - numHeight +1;
        }else {
            answer = ceilHeight - numHeight;
        }
    }
    
    return answer;
}