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
    
    for(const key in map) {
        map[key].sort();
    }
    
    console.log(map);
    
    function dfs(from,acc) {
        if(acc.length === tickets.length +1) {
          answer = acc;
          return;
        }
        
        const destination = map[from];
        
        if(!destination) return; 
        if(answer.length > 0) return;
        for(let i = 0 ; i<destination.length; i++) {
            const next = destination[i];
            
            destination.splice(i,1);
            
            dfs(next,[...acc,next]);
            
            destination.splice(i, 0, next);

        }
    }
    
    dfs("ICN",["ICN"]);
    
    return answer;
}