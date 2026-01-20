function solution(tickets) {
    var answer = [];
    const map = {};
    tickets.forEach(([from,to])=> {
        if(map[from] === undefined) {
            map[from] = [to];
        }else{
            map[from].push(to);
        }
    })
    

    // console.log(map);
    
    function dfs(current,path) {
        
        if(answer.length>0) return;
        
        if(path.length === tickets.length+1) {
            answer = path;
            return;
        }
        
        const destinations = map[current];
        
        if(!destinations) return;
        
        for(let i=  0 ; i<destinations.length; i++) {
            destinations.sort();
            const next = destinations[i];
            
            destinations.splice(i,1);
            
            dfs(next,[...path,next]);
            
            if(answer.length > 0) return;
            
            destinations.splice(i,0,next);

        }
        
    }
    
    dfs("ICN",["ICN"]);
    return answer;
}