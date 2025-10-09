function solution(progresses, speeds) {
    var answer = [];
    const remainArray = progresses.map((value, index)=> {
        return Math.ceil((100 - value)/speeds[index]);
    });
    let counter = 1;
    let maxNum = remainArray[0];
    console.log(remainArray);
    
    remainArray.forEach((value, index, array)=> {
        if(index == array.length-1) {
            answer.push(counter)
        }else if(maxNum < array[index+1]) {
            maxNum = array[index+1];
            console.log(`maxNum: ${maxNum}, counter: ${counter}`)
            answer.push(counter);
            counter = 1;
        }else {
            counter++;
        }
    })
    return answer;
}