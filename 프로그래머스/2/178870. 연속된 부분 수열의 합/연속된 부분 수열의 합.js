function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0]; // 첫 원소부터 시작
    let answer = [0, sequence.length]; // 초기값: 가장 긴 길이로 설정해둠    let sum = sequence[left] + sequence[right];
    let pointerLength = Infinity;

    while(left < sequence.length && right < sequence.length) {
        if(sum < k) {
            right++;
            sum += sequence[right];
        }
        
        if(sum > k) {
            sum -= sequence[left];
            left++;
        }
        if(sum === k) {
            if(pointerLength > (right - left)) {
                pointerLength = right - left;
                answer= [left,right];
            }
            right++;
            sum += sequence[right];
        }
    }
    console.log(answer);
    return answer;
}