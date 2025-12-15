function solution(m, n, puddles) {
    var answer = 0;
    const map = Array.from({length:n}, ()=> Array(m).fill(1));
    // console.log(map);
    puddles.forEach((value)=> {
        const [a,b] = value;
        map[b-1][a-1] = 0;
        if(a == 1) {
            for(let i =b-1; i< n; i++) {
                map[i][0] = 0;
            }
        }
        if(b == 1) {
            for(let i =a-1; i< m; i++) {
                map[0][i] = 0;
            }
        }
    })
    // console.log(map);
    
    for(let i = 1; i<m; i++) {
        for (let j = 1 ; j<n; j++) {
            if(map[j][i] !== 0) {
                map[j][i] = (map[j-1][i] + map[j][i-1]) % 1000000007;    
            }
        }
    }
    // console.log(map);
    return map[n-1][m-1];
}