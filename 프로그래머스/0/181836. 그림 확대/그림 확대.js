function solution(picture, times) {
    var answer = [];
    
    // 가로 확대: 각 문자를 times번 반복
    let widthExpanded = [];
    for (let i = 0; i < picture.length; i++) {
        let row = "";
        for (let j = 0; j < picture[i].length; j++) {
            row += picture[i][j].repeat(times);
        }
        widthExpanded.push(row);
    }
    
    // 세로 확대: 각 행을 times번 반복
    for (let i = 0; i < widthExpanded.length; i++) {
        for (let j = 0; j < times; j++) {
            answer.push(widthExpanded[i]);
        }
    }
    
    return answer;
}
