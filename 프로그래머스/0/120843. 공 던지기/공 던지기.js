function solution(numbers, k) {
    var answer = 0;
    let index = 0;
    for(let i = 0 ; i<k; i++) {
        index = index % numbers.length;
        answer = numbers[index];
        index +=2;
    }
    return answer;
}