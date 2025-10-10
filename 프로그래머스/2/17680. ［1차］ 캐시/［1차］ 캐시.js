function solution(cacheSize, cities) {
    var answer = 0;
    const lruCache = [];
    const lowerCaseCities = cities.map((value)=> value.toLowerCase())
    if (cacheSize === 0) {
    return cities.length * 5;
}

    //LRU 캐시를 적용한 push 시스템
    function cachePush(lruCache, inputValue) {
        if(lruCache.some((cacheMemoryValue)=> inputValue == cacheMemoryValue)) {
            const index = lruCache.indexOf(inputValue);
            lruCache.splice(index,1);
            lruCache.push(inputValue);
        }else {
            if(lruCache.length === cacheSize) {
                lruCache.shift();
            }
            lruCache.push(inputValue);
        }
    }

    lowerCaseCities.forEach((value)=> {
        if(lruCache.some((cacheMemoryValue)=> value == cacheMemoryValue)) {
            answer += 1;
        }else {
            answer += 5;
        }
        cachePush(lruCache, value);
    })
    
    return answer;
}