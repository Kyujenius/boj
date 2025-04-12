function solution(array) {
    var answer = 0;
    const frequency = array.reduce((acc,currentValue)=>{
        if(!acc[currentValue]) {
            acc[currentValue] = 0;
        }
        acc[currentValue] += 1;
        return acc
    },{});
    
    const max = Math.max(...Object.values(frequency));
    
    console.log(max);
    const frequencyArray = Object.entries(frequency);

    const maxArray = frequencyArray.filter(([key,value])=> value === max);
    if(maxArray.length > 1) {
        answer = -1;
    } else{
        console.log(maxArray[0][0])
        answer = parseInt(maxArray[0][0]);
    }
    
    return answer;
}