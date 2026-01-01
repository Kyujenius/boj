function solution(maps) {
    var answer = 0;
    const newMap = maps.map((arr)=>arr.split(""));
    // console.log(newMap);
    const N = newMap.length;
    const M = newMap[0].length;
    const startPosition = findPosition('S');
    const leverPosition = findPosition('L');
    const endPosition = findPosition('E');
//     console.log(startPosition,leverPosition,endPosition);
    
//     console.log(findAtoB(startPosition,leverPosition));

    if(findAtoB(startPosition,leverPosition) === -1 || findAtoB(leverPosition,endPosition) === -1)     {   
        return -1;
    }
    answer+= findAtoB(startPosition,leverPosition);
    answer+= findAtoB(leverPosition,endPosition);
    
    
    
    //A에서 B까지를 bfs로 찾는다.
    function findAtoB(start,end) {
        const [startX,startY] = start;
        const [endX,endY] = end;
        const visited = Array.from({length: maps.length},()=> Array(maps[0].length).fill(false));
        const dx = [-1,0,0,1];
        const dy = [0,-1,1,0];
        // console.log(startX,startY);
        // return -1;
        const queue = [[startX,startY,0]];
        visited[startY][startX] = true;
        while(queue.length >0) {
            const [x,y,count] = queue.shift();
            // console.log([x,y,count+1]);
            // break;           
            for(let i=0; i<4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                // console.log(nx,ny)
                // console.log(newMap[0][1], visited[0][1])
                if(nx >= 0 && nx <M && ny >=0 && ny <N && maps[ny][nx] !== 'X' && visited[ny][nx] === false) {
                    visited[ny][nx] = true;
                    queue.push([nx,ny,count+1]);
                    // console.log([nx,ny,count+1]);
                    // break;
                    if(nx === endX && ny === endY) {
                
                        return count+1;
                    }
                }
            } 
        }
        console.log("못 찾았습니다ㅠㅠ");
        return -1;
    }
    
    function findPosition(char) {
        for(let y = 0 ; y<maps.length; y++) {
            for(let x = 0 ;x<maps[0].length; x++) {
                if(maps[y][x] ===char) {
                    return [x,y];
                }
            }
        }
    }
    return answer;
}