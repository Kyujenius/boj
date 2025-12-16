function solution(order) {
    var answer = 0;
    const subContainer = [];
    const length = order.length;
    let counter =0;
    
    for(let i = 1; i<=length; i++) {
        subContainer.push(i);
        // console.log(`[${i}], ${subContainer}`);       
        while(subContainer[subContainer.length-1] == order[counter] && subContainer.length >0) {
            subContainer.pop();
            counter++;
            answer++;
        }
    }
    
    return answer;
}