function solution(progresses, speeds) {
    var answer = [];
    const remainProgresses = progresses.map((value)=> {
        return 100 - value;
    })
    const completeDayArray = remainProgresses.map((value,index)=> {
        return Math.ceil(value / speeds[index]);
    })
    console.log(completeDayArray);
    let counter = 1;
    let maxNum = completeDayArray[0];
    for(let i = 0; i< completeDayArray.length; i++) {
        if(maxNum < completeDayArray[i+1]) {
            answer.push(counter);
            counter = 1;
            maxNum = completeDayArray[i+1];
            // console.log(maxNum);
        }else if(i == completeDayArray.length-1) {
            answer.push(counter);
            return answer;
        }else{
            counter++;
            console.log(`maxNum >= completeDayArray[i] : ${maxNum} >= ${completeDayArray[i]}`);
        }
    }
    return answer;
}