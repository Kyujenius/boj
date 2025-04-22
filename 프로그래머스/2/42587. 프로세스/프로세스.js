function solution(priorities, location) {
    let object = {};
    priorities.forEach((value, index) => {
        object[index] = value;
    })
    // console.log(object);
    const entries = Object.entries(object);
    // console.log(entries);
    let count = 1;
    while(true) {
        const shifted = entries.shift();
        if(entries.some(([index, value]) => {
          return shifted[1] < value
        })) {
            entries.push(shifted);
        } else if(location == shifted[0]) {
            break;
        }else{
            count ++;
        }    
        // console.log(entries);
    }
    
    return count;
}