function solution(n, wires) {
    var answer = -1;
    //wires 에서 하나를 지워보고 지운 것을 기준으로 set을 두개를 둬서, DFS 맹키로 쭉 다 넣어버린다?  
    const answerCandidate = [];
    const newWires = wires;
    for(let i = 0 ; i<n; i++) {
        //하나 지우기
        const map = {};

        wires.forEach(([from,to], index)=> {
            if(i === index) return;
            if(map[from] == undefined) {
                map[from] = [to]
            }else {
                map[from].push(to);
            }

            if(map[to] == undefined) {
                map[to] = [from]
            }else {
                map[to].push(from);
            }
        })
        // console.log(map);
        //맵 새로 만든 뒤, Set 두개 둬서 비교하기
        const aSet = new Set();
        
        const mapEntries = Object.entries(map);
        const firstKey =  mapEntries[0][0];
        const queue = [];
        queue.push(firstKey);
        while(queue.length>0) {
            const from = queue.shift();
            //이제 연결된 배열들 중에 Set 에 넣고
            map[from].forEach((to)=>{
                if(!aSet.has(to)) {
                    queue.push(to);
                    aSet.add(to);
                }
            })
        }
        answerCandidate.push(Math.abs((n - aSet.size) - aSet.size));
    }
    // console.log(answerCandidate)
   
    answer = Math.min(...answerCandidate)
    
    return answer;
}