function solution(order) {
    var answer = 0;
    let count = 0;
    const subContainer = [];
    for(let i = 1 ; i<=order.length; i++) {
            subContainer.push(i);
        while(subContainer[subContainer.length-1] == order[count] && subContainer.length > 0) {
            answer++;
            subContainer.pop();
            count++;
        }
    }
    return answer;
}