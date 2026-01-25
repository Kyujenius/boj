const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N,M] = input;
let result = '';
const output = [];

function dfs(count, start){
    if(count === M) {
        result += output.join(' ') + "\n";
        return;
    }
    
    for(let i = start; i<=N; i++) {
            output.push(i);
            dfs(count+1, i+1);
            output.pop();
    }
}

dfs(0, 1);
console.log(result);
