function solution(board) {
    var answer = 0;
    //각기 다른 방향을 통해 접근하는 경우의 최소비용을 dp 에 넣거나, dikstra 알고리즘으로 덮을 수 있게끔 구성 
    
    //아래 : 0, 오른쪽: 1, 위: 2, 왼쪽: 3
    //queue1은 아래로 가면서 시작
    const N = board.length;
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    const price = Array.from({length: N}, ()=> Array.from({length: N}, () => Array(4).fill(Infinity)));
                             
    const queue =  [];
    //오른쪽 갈때
    if(board[0][1] === 0) {
        queue.push([0,1,1,100]);
        price[0][1][1] = 100;
    }
    //아래 갈 때
    if(board[1][0] === 0) {
        queue.push([1,0,0,100]);
        price[1][0][0] = 100;
    }
    let idx = 0;
    while(queue.length > 0) {
        // console.log(queue);
        //x,y,이전 방향, 비용
        const [y,x,direction,count] = queue.shift();
        for(let i = 0 ; i<4; i++) {
            const nx = dx[i] +x;
            const ny = dy[i] +y;
            if((nx>= 0  && nx<N) 
               && (ny >=0 && ny<N) 
               && (board[ny][nx] === 0)
               //가려는 곳보다 100원
               ){
                let dirCount = count + (direction === i ? 100 : 600);
                if(price[ny][nx][i] > dirCount) {
                    price[ny][nx][i] = dirCount;
                    queue.push([ny,nx,i,dirCount])                   
                }
 
            }
        }
        
    }
    answer = Math.min(...price[N-1][N-1]);
    return answer;
}


//출발점은 (0, 0) 칸(좌측 상단)이며, 도착점은 (N-1, N-1) 칸(우측 하단)

//직선 도로 하나를 만들 때는 100원이 소요되며, 코너를 하나 만들 때는 500원이 추가로 듭니다.


