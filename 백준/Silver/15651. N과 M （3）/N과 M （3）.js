//visited 가 false 가 아니라 숫자로 하면 되겠다.
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N,M] = input;

const visited = Array(N+1).fill(0);
const output = [];
let result = '';

function dfs(count) {
    if(count === M) {
        result += output.join(' ')+'\n';
        return;
    }
    
    for(let i=1; i<=N; i++){
        if(visited[i] < M) {
            visited[i] ++;
            output.push(i);
            
            dfs(count+1);
            
            visited[i] --;
            output.pop();
        }
    }
}

dfs(0);
console.log(result);