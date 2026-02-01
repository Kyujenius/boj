function solution(n, roads, sources, destination) {
    var answer = [];
    const graph = {};
    
    roads.forEach(([from,to])=> {
        if(graph[from]===undefined) {
            graph[from] = [to];
        }else {
            graph[from].push(to);
        }
        
        if(graph[to]===undefined) {
            graph[to] = [from];
        }else {
            graph[to].push(from);
        }
    })
    // console.log(graph);
    
    //[출발지, 거리] 
    const queue = [[destination, 0]];
    const dist = Array(n+1).fill(0);
    dist[destination] = 0;
    
    while(queue.length > 0) {
        const [from,distance] = queue.shift();
        graph[from].forEach((to)=> {
            if(dist[to] === 0 && to !== destination) {
                dist[to] = distance+1;
                queue.push([to,distance+1]);
            }
        })
    }
    // console.log(dist);
    sources.forEach((source)=> {
        if(source === destination) {
            answer.push(0);
        }else if(dist[source] === 0) {
            answer.push(-1)    
        }else {
            answer.push(dist[source]);
        }
        
    })
    return answer;
}