function solution(n, costs) {
    var answer = 0;
    const map = {};
    costs.forEach(([from,to,cost])=> {
        if(map[from]===undefined) {
            map[from] = [{to : to ,cost : cost}];    
        }else {
            map[from].push({to : to ,cost : cost});    
        }
        
        if(map[to] === undefined) {
            map[to] = [{to : from ,cost : cost}];    
        }else {
            map[to].push({to : from ,cost : cost});    
        }
    })
    // console.log(map);
    const queue = [{to:0,cost:0}];;
    const visited = Array(Object.keys(map).length).fill(false);    
    while(queue.length >0) {
        console.log(queue);
        queue.sort((a,b)=>a.cost-b.cost);
        const {to:from,cost:cost} = queue.shift();
        if(!visited[from]) {
            answer +=cost;
            visited[from] = true;   
            
            const sortedToArr = map[from].sort((a,b)=>a.cost-b.cost);
        
            sortedToArr.forEach(({to:to, cost:toCost})=> {
                if(!visited[to]){
                    queue.push({to:to,cost:toCost});
                }

            })    
        }
        

        // console.log(visited);
    }

    return answer;
}


//최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성
//100 과 100C2 만큼 costs의 길이

