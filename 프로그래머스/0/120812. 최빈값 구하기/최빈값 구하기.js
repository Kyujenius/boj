function solution(array) {
    var answer = 0;
    let object = {};
    array.forEach((value) => {
        if(!object[value]) {
            object[value] = 1
        }else {
            object[value] += 1;
        }
    })
    console.log(object);
    const entries = Object.entries(object).sort(([key,value], [key2,value2]) => {
        return value2 - value;
    })
    console.log(entries);
    const frequencyArray = Object.values(Object.fromEntries(entries));
    console.log(frequencyArray)
    const maxNumber = Math.max(...frequencyArray);
    const filteredEntries = entries.filter(([key,value]) => value == maxNumber);
    console.log(filteredEntries);
    
    if(filteredEntries.length > 1) {
        return -1;
    }else {
        console.log(filteredEntries[0][0]);
        answer = parseInt(filteredEntries[0][0]);
    }
    return answer;
}