function solution(n) {
    var answer = [];
    const arr = Array.from({length:n},()=> Array(n).fill(0));
    const length = n;
    // console.log(arr);
    let startX = 0;
    let startY = -1;
    let count = 0;
    for(let i = 0 ; i<length; i++) {
        //direction 은 방향 0: 아래, 1은 오른쪽, 2는 대각선 위
        const direction = i % 3;
        
        //방향이 아래일 때는,  
        if(direction === 0) {
            for(let j = 0; j<n; j++) {
                count++;
                startY++;
                arr[startY][startX] = count;
            }
        }
        //방향이 오른쪽일 때는,
        if(direction === 1) {
            for(let j = 0; j<n; j++) {
                count++;
                startX++;
                arr[startY][startX] = count;
            }
        }
        //방향이 왼쪽 위일 때는,
        if(direction === 2) {
             for(let j = 0; j<n; j++) {
                count++;
                startX--;
                startY--;
                arr[startY][startX] = count;
            }
        }
        n--;
    }
    // console.log(arr);
    arr.forEach((row)=> {
        row.forEach((value)=> {
            if(value !== 0) {
                answer.push(value);
            }
        })
    })
    return answer;
}