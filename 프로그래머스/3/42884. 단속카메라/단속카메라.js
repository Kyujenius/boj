function solution(routes) {
    var answer = 0;
    routes.sort((a,b)=>a[1] - b[1])
    
    
    let lastIdx = -30001;
    console.log(routes);
    routes.forEach(([startRoute,endRoute])=> {
        if(lastIdx < endRoute && lastIdx > startRoute) {
            lastIdx = endRoute;
            answer++;
        }
    })
    
    return answer;
}