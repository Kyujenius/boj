function solution(routes) {
    var answer = 0;
    routes.sort((a,b)=> a[1]-b[1]);
    console.log(routes);
    
    let lastRoute = -30001;
    routes.forEach(([start,end])=> {
        if(start <= lastRoute) {
            // console.log('pass');
        }else {
            lastRoute = end;
            answer++;    
        }
        
    })
    return answer;
}