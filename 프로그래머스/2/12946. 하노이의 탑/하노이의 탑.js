function solution(n) {
    var answer = [];
    
    function hanoi(num,from,mid,to) {
        if(num === 1) {
            answer.push([from,to]);
            return
        }
        // num-1 같의 하노이를 mid 까지 옮기기
        hanoi(num-1,from,to,mid);
        
        // 쿵, 가장 큰 숫자를 to 쪽으로 옮기기
        answer.push([from,to]);
        
        // mid에 옮겨뒀던 것들 다시 to로 옮기기
        hanoi(num-1,mid,from,to);
    }
    
    hanoi(n,1,2,3)
    return answer;
}