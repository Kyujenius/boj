function solution(brown, yellow) {
    var answer = [];
    let brownWidth = brown/2;
    let brownHeight = 2;
    while(true) {
        let yellowWidth = brownWidth-2;
        let yellowHeight = brownHeight-2;
        if(yellowWidth * yellowHeight == yellow) {
            return [brownWidth,brownHeight];
        }else{
            brownWidth--;
            brownHeight++;
        }
    }
    return answer;
}