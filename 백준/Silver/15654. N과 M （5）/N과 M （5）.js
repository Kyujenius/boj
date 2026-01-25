const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number).sort((a,b)=> a-b);

const visited = Array(N).fill(false);
const output = [];
let result = '';

function dfs(count) {
    if(count === M) {
        result += output.join(' ') + '\n';
        return;
    }
    
    for(let i = 0; i< N; i++) {
        if(!visited[i]) {
            visited[i] = true;
            output.push(arr[i]);

            dfs(count+1);
            
            visited[i] = false;
            output.pop();
        }
    }
}

dfs(0);
console.log(result);