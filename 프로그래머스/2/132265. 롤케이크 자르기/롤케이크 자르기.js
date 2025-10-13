function solution(topping) {
    let answer =0;
    const aMap = new Map();
    const bMap = new Map();
    topping.forEach((value) => aMap.set(value, (aMap.get(value) || 0) +1))
    console.log(aMap,bMap);
    for(let i=0; i<topping.length; i++) {
        const value = topping[i]
        if(aMap.get(value) == 1) {
            aMap.delete(value);
        }else {
            aMap.set(value, aMap.get(value)-1);
        }
        
        bMap.set(value, (bMap.get(value) || 1) +1);
        if(aMap.size === bMap.size) {
            // console.log(aMap,bMap);
            answer++;
        }
    }
    return answer;
    
}