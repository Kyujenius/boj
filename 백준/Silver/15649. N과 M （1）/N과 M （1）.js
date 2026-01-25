const fs = require('fs');
// 백준 제출 시에는 '/dev/stdin', 로컬 테스트 시에는 입력 파일 경로
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N,M] = input;

const visited = Array(N+1).fill(false)
let result = '';
const output = [];

function dfs(count) {
    if(count == M) {
        result += output.join(" ") + "\n";
        return;
    }
    
    for(let i = 1; i<=N; i++) {
        if(!visited[i]) {
            output.push(i);
            visited[i] = true;

            dfs(count+1);
            
            output.pop();
            visited[i] = false;
        }
    }
}


dfs(0);
console.log(result);