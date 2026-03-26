function solution(info, edges) {
    var answer = 0;
    const adj = Array.from({length: info.length},()=> []);
    edges.forEach(([parent,child])=> {
        adj[parent].push(child);
    })
    // console.log(adj);
    
    function dfs(current,sheep,wolf,available) {
        if(info[current] === 0) sheep++;
        else wolf++;
        
        if(available.indexOf(current) !== -1) {
            available.splice(available.indexOf(current),1);
        }
        
        available.push(...adj[current]);
        if(sheep<=wolf) return;
        
        answer = Math.max(answer,sheep);
        for(const next of available) {
            dfs(next,sheep,wolf,[...available]);
        }
        
        
    }
    dfs(0,0,0,[])
    return answer;
}