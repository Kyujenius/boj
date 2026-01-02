function solution(maps) {
    var answer = 0;
    if(aToB(findLocation("S"), findLocation("L")) === -1 || aToB(findLocation("L"), findLocation("E")) ===-1) return -1;

    answer += aToB(findLocation("S"), findLocation("L"));
    answer += aToB(findLocation("L"), findLocation("E"));
    
    
    
    function findLocation(char){
        for(let i = 0; i<maps.length; i++) {
            for(let j = 0 ; j<maps[0].length; j++) {
                if(maps[i][j] === char){
                    return [j,i];
                }
            }
        }
    }
    function aToB (start,end) {
        const [startX,startY] = start;
        const [endX,endY] = end;
        const dx = [-1,0,0,1];
        const dy = [0,-1,1,0];
        const visited = Array.from({length:maps.length},()=>Array(maps[0].length).fill(false));
        const queue= [[startX,startY,0]];
        while(queue.length >0) {
            const [x,y,count] = queue.shift();
            for(let i = 0; i<4; i++) {
                const nx = x+ dx[i];
                const ny = y+ dy[i];
                
                if((nx>=0 && nx<maps[0].length)&&
                   (ny>=0 && ny<maps.length)&&
                   (maps[ny][nx] !== 'X') &&
                   visited[ny][nx] ===false
                  ) {
                    visited[ny][nx] = true;
                    queue.push([nx,ny,count+1]);
                    if(nx === endX && ny ===endY) return count+1;
                }
            }    
        }
        return -1;
        
    }
    return answer;

}