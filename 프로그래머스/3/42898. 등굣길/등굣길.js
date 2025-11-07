function solution(m, n, puddles) {
    const maps = Array.from({length:n},() => Array(m).fill(-1));
    const mod = 1000000007;
    for(let i = 0; i<m; i++) {
        maps[0][i] = 1;
    }
    for(let i = 0; i<n; i++) {
        maps[i][0] = 1;
    }
    puddles.forEach((value)=> {
        const [a,b] = value;
        maps[b-1][a-1] = 0;
        if(a==1) {
            for(let i = b-1; i<n; i++) {
                maps[i][0] = 0;
            }   
        }
        if(b==1) {
            for(let i = a-1; i<m; i++) {
                maps[0][i] = 0;
            }   
        }
    })
    for(let i = 1; i<m; i++) {
        for(let j =1; j<n; j++) {
            if(maps[j][i] == -1) {
                maps[j][i] = (maps[j-1][i] + maps[j][i-1])% mod           
            }
        }
    }
    // console.log(maps);

    return maps[n-1][m-1];
}