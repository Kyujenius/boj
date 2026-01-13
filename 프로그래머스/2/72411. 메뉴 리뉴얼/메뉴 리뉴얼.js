function solution(orders, course) {
    var answer = [];
    function getCombinations (arr, selectNumber) {
        const results = [];
        if(selectNumber ===1) return arr.map((value) => [value]);
        arr.forEach((fixed,index,origin) => {
            const rest = origin.slice(index+1);
            const combinations = getCombinations(rest,selectNumber-1);    
            const result = combinations.map((value => [fixed, ...value]));
            results.push(...result);
        }) 
        
        return results;
    }
    
    course.forEach((courseNumber) => {
        const courseMap = new Map();
        orders.forEach((order)=> {
            const orderArr = order.split("");
            if(courseNumber > orderArr.length) return;
            const comb = getCombinations(orderArr, courseNumber);
  
            
            comb.forEach((combinationKey)=> {
                courseMap.set(combinationKey.sort().join(''), (courseMap.get(combinationKey.sort().join(''))||0)+1);        
            })
        })
        
        // console.log(courseMap);
        
        let candidateArr = [];
        let maxNum = 0;
        //제일 큰 놈들 뽑아다가 answer에 넣기,
        courseMap.forEach((value,key,map)=> {
            if(value > maxNum && value >= 2) {
                maxNum = Math.max(maxNum, value);
                candidateArr = [];
                candidateArr.push(key);
            }else if(value === maxNum) {
                candidateArr.push(key);
            }
        })
        
        answer.push(...candidateArr);
    })
    return answer.sort();
}