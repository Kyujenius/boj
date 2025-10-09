function solution(cacheSize, cities) {
    var answer = 0;
    const cacheArray = [];
        // 이 부분을 추가!
    if (cacheSize === 0) {
        return cities.length * 5;
    }

    //LRU Cache를 구현해야하는데, 
    function cachePush(cacheArray, inputValue, cacheSize) {
        //있으면 맨 뒤로 보내야함.
        // console.log(cacheArray, inputValue, cacheSize);
        if(cacheArray.some((value) => value == inputValue)) {
            const index = cacheArray.indexOf(inputValue)
            cacheArray.splice(index, 1);
            cacheArray.push(inputValue);
        }else {
            if(cacheArray.length === cacheSize) {
                cacheArray.shift();
            }
            //없으면 추가해야함
            cacheArray.push(inputValue);
        }
    }
    const lowerCity = cities.map((value)=> {
        return value.toLowerCase();
    })
    lowerCity.forEach((city,index,array)=> {
        //하나라도 있으면 answer +1
        if(cacheArray.some((value) => value == city)) {
            answer +=1;
            // console.log(`있어요 value: ${city}`)
        }else {
        //하나도 없으면 answer +5
            answer +=5;
        }
        cachePush(cacheArray, city, cacheSize);
    })

    return answer;
}