function solution(n) {
    var answer = [];
    const map = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
    let y = -1;
    let x = 0;
    let count = 1;
    let number = n;
    let mode = 'down' ;
    while(number >= 0) {
        for(let i = 0 ; i<number; i++) {
            y++;
            map[y][x] = count;
            count++;
        }
        number--;
        for(let i = 0; i<number; i++){
            x++;
            map[y][x] = count;
            count++;
        }
        number--;
        for(let i = 0; i<number; i++){
            y--;
            x--;
            map[y][x] = count;
            count++;

        }
        number--;
    }
    map.forEach((array)=> {
        array.forEach((value)=> {
            answer.push(value);
        })
    })
    return answer;
}