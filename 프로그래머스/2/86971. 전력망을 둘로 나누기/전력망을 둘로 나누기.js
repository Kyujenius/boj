function solution(n, wires) {
    var answer = -1;
    const answerCandidate = [];
    for(let i = 0; i<wires.length; i++) {
        const wireObj = {};
        const aSet = new Set();
        wires.forEach(([from,to],index,array)=>{
            if(index === i) return;
            if(wireObj[from] == undefined) {
                wireObj[from] = [to]
            }else {
                wireObj[from].push(to)
            }

            if(wireObj[to] == undefined) {
                wireObj[to] = [from]
            }else {
                wireObj[to].push(from)
            }
        })
        console.log(wireObj);
        const wireEntries = Object.entries(wireObj);
        const firstKey = wireEntries[0][0];
        
        const queue = [firstKey];
        
        while(queue.length>0) {
            const key = queue.shift();
            wireObj[key].forEach((to)=> {
                if(!aSet.has(to)) {
                    aSet.add(to);
                    queue.push(to);
                }       
            })
        }
        
        answerCandidate.push(Math.abs((n - aSet.size) - aSet.size))
    }
    // console.log(answerCandidate)
    
    answer = Math.min(...answerCandidate)
    return answer;
}