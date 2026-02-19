function solution(orders, course) {
    var answer = [];
    course.forEach((courseCount) => {
        const map = new Map();
        orders.forEach((order)=> {
            if(order.length >= courseCount) {
                const candidate = getCombination(order.split("").sort(),courseCount);
                candidate.forEach((comb) => {
                    map.set(comb.join(""),(map.get(comb.join("")) || 0) +1);
                })
            }
        })
        const obj = Object.fromEntries(map);
        const entry = Object.entries(obj);
        entry.sort((a,b)=> b[1] -a[1]);
        const unsorted = entry.filter((value) => value[1] === entry[0][1] && value[1] >1).map((val)=>val[0]);
        // unsorted.sort((a,b)=> a-b);
        unsorted.sort();
        // console.log(unsorted);
        answer.push(...unsorted);
        
    })
    return answer.sort();
}

function getCombination(arr,selectNumber) {
    const results = [];
    if(selectNumber == 1) {
        return arr.map((value)=> [value]);
    }
    
    arr.forEach((fixed,index,origin)=> {
        const rest = origin.slice(index+1);
        const combinations = getCombination(rest,selectNumber-1);
        const attached = combinations.map((combination) => [fixed,...combination]);
        results.push(...attached);
    })
    
    return results;
    
}