function solution(n, w, num) {
    // 22 개의 박스를 , 6의 width로 쌓았을 때, 8번째 박스를 꺼내려면 드는 횟수 구하기
    var answer = 0;
    let numHeight = Math.ceil(num / w ); // 2
    let numPosition = num % w ; // 2
    let ceilHeight = Math.ceil(n / w ); // 4
    let ceilPosition = n % w ; // 4
    
    if(numPosition == 0) {
        numPosition = w; //6의 배수면 6으로
    }
    
    if(ceilPosition == 0) {
        ceilPosition = w; //6의 배수면 6으로
    }
    //짝수번째면 position의 위치를 바꿔버려
    
    if(numHeight %2 == 0  && ceilHeight %2 ==0) {
        and();
        
    }else if(numHeight %2 !== 0  && ceilHeight %2 !==0) {
        and();
    }
    else if(numHeight %2 == 0  && ceilHeight %2 !==0) {
        xor();
    }
    else if(numHeight %2 !== 0  && ceilHeight %2 ==0) {
        xor();
    }
    
    function and() {
        if(ceilPosition >= numPosition) {
            answer = ceilHeight - numHeight +1;
        }else {
            answer = ceilHeight - numHeight;
        }
    }
    
    function xor() {
        if(ceilPosition + numPosition > w) {
            answer = ceilHeight - numHeight +1;
        }else {
            answer = ceilHeight - numHeight;
        }
    }
    
    return answer;
}