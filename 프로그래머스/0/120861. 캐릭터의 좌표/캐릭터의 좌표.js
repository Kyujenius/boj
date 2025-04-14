function solution(keyinput, board) {
    var answer = [0,0];
    const maxX = (board[0]-1)/2
    const minX = (board[0]-1)/-2
    const maxY = (board[1]-1)/2
    const minY = (board[1]-1)/-2
    console.log(minX,maxX,minY,maxY);
    
        keyinput.forEach((value)=> {
        switch(value) {
            case "left" :
                if(answer[0] > minX) {  // 이동 후 위치가 최소 X보다 크거나 같은지 확인
                    answer[0] -= 1;   
                }
                break;
            case "right" :
                if(answer[0] < maxX) {  // 이동 후 위치가 최대 X보다 작거나 같은지 확인
                    answer[0] += 1;   
                }
                break;
            case "up" :
                if(answer[1] < maxY) {  // 이동 후 위치가 최대 Y보다 작거나 같은지 확인
                    answer[1] += 1;   
                }
                break;
            case "down" :
                if(answer[1] > minY) {  // 이동 후 위치가 최소 Y보다 크거나 같은지 확인
                    answer[1] -= 1;   
                }
                break;
        }
    });

    
    return answer;
}