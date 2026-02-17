function solution(weights) {
    var answer = 0;
    const obj = {};
    const obj2 = {};
    const map = new Map();
    weights.forEach((value)=> {
        map.set(value,(map.get(value) || 0)+1);
    })
    console.log(map);
    for(const entry of map) {
        if(entry[1] >= 2) {
            const n = entry[1] ;
            answer += n*(n-1)/2;
        }
        const candidate = [entry[0] * (3/2), entry[0] * (4/3),entry[0] * 2];
        candidate.forEach((value)=> {
            if(map.get(value) !== undefined) {
                answer += map.get(value) * entry[1];
            }
        })
    }
    // console.log(obj);
    return answer;
}