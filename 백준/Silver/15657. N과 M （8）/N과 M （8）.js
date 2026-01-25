const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N,M] = input[0].split(" ").map(Number);
const arr = input[1].split(' ').map(Number).sort((a,b)=> a-b);
const visited = Array(N).fill(0);

let result = '';
const output = [];

function dfs(count, start) {
    if(count === M) {
        result += output.join(' ') + '\n';
        return;
    }
    
    for(let i = start; i<N; i++) {
        if(visited[i] < N) {
            visited[i]++;
            output.push(arr[i]);
            
            dfs(count+1, i);
            
            visited[i]--;
            output.pop();
        }
    }
}

dfs(0,0);
console.log(result);

