function solution(array, commands) {
    var answer = [];
    commands.forEach((command) => {
        const [i,j,k] = command;
        const result = customFn(array,i,j,k);
        answer.push(result);
    })
    
    console.log(`answer: ${answer}`);
    return answer;
}
function customFn(array, i,j,k) {
    const newArray = array.slice(i-1,j);
    const sortedArray = newArray.sort((a,b) => a-b);
    console.log(sortedArray);
    return sortedArray[k-1]
}