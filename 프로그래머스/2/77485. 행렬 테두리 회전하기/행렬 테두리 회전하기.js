function solution(rows, columns, queries) {
    var answer = [];
    const map = Array.from({length:rows},()=> Array(columns).fill(0));
    for(let i=0; i<columns; i++) {
        for(let j = 0; j<rows; j++) {
            map[j][i] = i+1+(j*columns);
        }
    }
    // console.log(map);
    let smallestNumber = Infinity;
    queries.forEach((query)=> {
        const [ny1,nx1,ny2,nx2] = query;
        const y1 = ny1-1;
        const x1 = nx1-1;
        const y2 = ny2-1;
        const x2 = nx2-1;
        // console.log("-------", `[x1 :${x1},y1 : ${y1}],[x2 :${x2},y2 : ${y2}]`, "---------");

        const dx = x2 - x1;
        const dy = y2 - y1;
        
        const a = [];
        for(let x = x1; x<x2; x++) {
            a.push(map[y1][x]);
        }
        let aCount = 0;

        
        // const b = 
        
        const b = [];
        let bCount = 0;
        for(let y = y1; y<y2; y++) {
            b.push(map[y][x2]);
        }
        
        
        
        const c = [];
        let cCount = 0;
        for(let x = x1+1; x<=x2; x++) {
            c.push(map[y2][x]);
        }
        
        
        const d = [];
        let dCount = 0;
        for(let y = y1+1; y<=y2; y++) {
            d.push(map[y][x1]);
        }
        // console.log(`a:${a}`);
        // console.log(`b:${b}`);
        // console.log(`c:${c}`);
        // console.log(`d:${d}`);
        for(let x = x1; x<x2; x++) {
            map[y1][x+1] = a[aCount++];
        }
        for(let y = y1; y<y2; y++) {
            map[y+1][x2] = b[bCount++];
        }
        for(let x = x1+1; x<=x2; x++) {
            map[y2][x-1] = c[cCount++];
        }
        for(let y = y1+1; y<=y2; y++) {
            map[y-1][x1] = d[dCount++];
        }
        // console.log(map);
        smallestNumber = Math.min(...a,...b,...c,...d)
        answer.push(smallestNumber);
    })
    return answer;
}