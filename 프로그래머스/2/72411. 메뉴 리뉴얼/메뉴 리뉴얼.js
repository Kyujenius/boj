function solution(orders, course) {
    var answer = [];
    function getCombinations (arr,selectNumber) {
        if(selectNumber ===1) return arr.map((value)=> [value]);
        const results = [];
        arr.forEach((fixed,index,origin)=> {
            const array = origin.slice(index+1);
            const combinations = getCombinations(array, selectNumber-1);
            const result = combinations.map((value)=> [fixed,...value]);
            results.push(...result);
        })
        return results
    }
    
    
    course.forEach((courseNum) => {
        const bestOrderMap = new Map();
        //각 courseNum 이 getCombinations 의 숫자로 들어가서, Map 을 채운다.
        orders.forEach((order)=> {
            const splittedOrder = order.split("").sort();
            const combi = getCombinations(splittedOrder,courseNum);
            combi.forEach((comb)=> {
                const inputComb = comb.join('');
                bestOrderMap.set(inputComb, (bestOrderMap.get(inputComb) || 0) +1);
            })
        })
        let bestMenus = [];
        let bestMenuNum = 0;
        for(const [key,value] of bestOrderMap) {
            if(value > bestMenuNum && value >=2) {
                bestMenuNum = value;
                bestMenus = [key]
            }else if(value === bestMenuNum){ 
                bestMenus.push(key);
            }
        }
        
        answer.push(...bestMenus);
    })
    return answer.sort();
}