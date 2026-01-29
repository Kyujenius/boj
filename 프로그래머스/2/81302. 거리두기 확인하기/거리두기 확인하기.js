//["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"]
function solution(places) {
    var answer = [];
    const n = 5;
    const m = 5;
    places.forEach((place)=> {
        let isWrong = false;
        for(let i = 0 ; i<n; i++) {
            for(let j =  0 ; j<m; j++) {
                if(place[i][j] === 'P') {
                    if(bfs(i,j,place) === false) {
                        isWrong = true;
                        break;
                    }
                }
            }
            if(isWrong === true){
                break;
            }
        }
        if(isWrong) {
            answer.push(0);
        }else{
            answer.push(1);
        }
    });
    
    
    
    function bfs(y,x,place) {
        const queue = [[x,y,0]];
        const visited = Array.from({length:5},()=> Array(5).fill(false));
        const dx = [-1,1,0,0];
        const dy = [0,0,1,-1];
        
        while(queue.length > 0) {
            const [x,y,count] = queue.shift();
            visited[y][x] = true;
            if(count >= 2) continue;
            
            for(let i = 0; i<4; i++) {
                const nx = dx[i] + x;
                const ny = dy[i] + y;
                if(nx >= 0 && nx <m && ny>=0 && ny <m && !visited[ny][nx]) {
                    if(place[ny][nx] === 'P') {
                        // console.log(`${x},${y} => ${nx},${ny}: false 리턴`)
                        return false;
                    }
                    if(place[ny][nx] === 'O') {
                        visited[ny][nx] = true; 
                        queue.push([nx,ny,count+1]);
                    }
                }
                
            }
            // console.log(queue);
        }
        return true;
           
    }
    return answer;
}