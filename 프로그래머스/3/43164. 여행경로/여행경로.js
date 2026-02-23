function solution(tickets) {
    var answer = [];
    const map = {};
    
    tickets.forEach(([from,to])=> {
        if(map[from]===undefined) {
            map[from] = [to]
        }else {
            map[from].push(to);
            map[from].sort();
        }
    })
    console.log(map);
    
    const arr = ["ICN"];

    function dfs(from,count) {
        // console.log(`from:${from},count:${count},arr:${arr}`)
        if(count === tickets.length) {
            answer = [...arr];
            return;
        }
        
        if(!map[from]) return;
        //만약에 티켓이 남아있는데, 갈 곳이 없으면 빠구
        if(map[from].length === 0) return;
        
        const destinations = map[from];
        
        for(let i = 0 ; i<destinations.length; i++) {
            
            const destination = destinations.splice(i,1);
            const to = destination[0];
            arr.push(to);
            
            dfs(to, count+1);     
            
            if(answer.length>0) return;
            
            arr.pop();
            
            destinations.splice(i,0,to);

        }

        
    }
    dfs("ICN",0);
    
    return answer;
}

// 항상 "ICN" 공항에서 출발

// 주어진 항공권을 모두 이용해야한다.

// 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.

// 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

