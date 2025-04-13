function solution(num, total) {
    var answer = [];
    let center = total/num;
    let isNumEven = false;
    let counter = 0;
    if(num % 2 == 0) {
        isNumEven = true;
    }
    if(isNumEven) {
        center = Math.ceil(center);         
    }
    answer.push(center);
    while(answer.length < num) {
        counter++;
        answer.unshift(center-counter);
        if(answer.length >= num) {
            break;
        }
        answer.push(center+counter);
    }

    return answer;
}