function solution(places) {
    var answer = [];
    places.forEach((place)=> {
        let isWrong = false;
        for(let i=0; i<place.length; i++) {
            for(let j = 0; j<place[0].length; j++) {
                if(place[i][j] === 'P'){
                    //bfs 함수의 결과물은 true 면 isWrong 도 true
                    if(bfs(i,j,place) === true) {
                        // console.log('bfs 가 true');
                        isWrong = true;
                        break;
                    }
                }
            }
            if(isWrong) break;
        }
        if(isWrong) {
         answer.push(0);   
        }else {
        answer.push(1);    
        }
        
    })
    
    function bfs(y,x,place) {
        const queue = [[x,y,0]];
        const visited = Array.from({length:5},()=> Array(5).fill(false));
        visited[y][x] = true;
        
        const dx = [-1,1,0,0];
        const dy = [0,0,-1,1];
        let isBFSWrong = false;
        
        while(queue.length>0) {
            const [currentX,currentY,count] = queue.shift();
            if(count >=2) continue;            
            for(let i = 0; i<4; i++) {
                const nx = dx[i] + currentX;
                const ny = dy[i] + currentY;

                if(nx >=0 && nx <place[0].length && ny >=0 && ny <place.length && !visited[ny][nx]) {
                    if(place[ny][nx] === 'P') {
                        isBFSWrong = true;
                        return true;
                    }
                    if(place[ny][nx] === 'O') {
                        visited[ny][nx] = true;
                        queue.push([nx,ny,count+1]);    
                    }
                    
                }    
            }   
        }
        return isBFSWrong;
    }
    
    return answer;
}