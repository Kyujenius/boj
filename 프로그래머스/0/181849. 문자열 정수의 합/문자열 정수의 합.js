function solution(num_str) {
    var answer = 0;
    for(let i =0; i<num_str.length; i++) {
        const num = +num_str[i];
        answer +=num
    }
    return answer;
}