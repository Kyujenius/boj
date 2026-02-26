function solution(places) {
    var answer = [];
    places.forEach((place) => {
        let isWrong = false;

        const map = place.map((row)=> row.split(""));
        console.log('------------------------')
        console.log(map);
        //각 자리들을 처음부터 끝까지 쭉 순찰을 한다.

        for(let i = 0; i<map.length; i++) {
            for(let j = 0 ; j<map[0].length; j++) {
                if(map[i][j] === "P") {
                     isWrong = bfs(j,i, map);
                };
                if(isWrong === true) break;
            }
            if(isWrong === true) break;
        }
        
        if(isWrong){
            answer.push(0);
        }else {
            answer.push(1);
        }
    })
    
    function bfs(x,y,map) {
        const queue = [[x,y,0]];
        const dx = [-1,1,0,0];
        const dy = [0,0,-1,1];
        const visited = Array.from({length: 5}, ()=> Array(5).fill(false));
        visited[y][x] = true;
        
        console.log(`${x},${y} 에서 시작`)

        while(queue.length > 0) {
            const [x,y,count] = queue.shift();

            for(let i = 0 ; i<4; i++) {
                const nx = dx[i] + x;
                const ny = dy[i] + y;
                if((nx >= 0 && nx <5) &&
                  (ny >= 0 && ny <5) &&
                  !visited[ny][nx] && count <=1) {
                    if(map[ny][nx] === "P") {
                        console.log("[Bad] 거리 안 지킴");
                        console.log(ny,nx,"가 범인")
                        return true;
                    }else if(map[ny][nx] === "O") {
                        queue.push([nx,ny,count+1]);
                        visited[ny][nx] = true;
                    }
                }
            }
        }
        console.log("[Good] 거리 잘 지킴");
        return false;
    }
    
    
    
    //순찰 끝에 P 라는 녀석을 만나면, 해당 P를 기준으로 BFS를 실행한다. 
    //다만 BFS 도중 O일 때 or count 자체가 2까지만 진행한다. 
    return answer;
}