const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 테스트 케이스 수
const T = parseInt(input[0]);
let results = [];

for (let t = 1; t <= T; t++) {
  const keystrokes = input[t];
  
  // 키로거 구현을 위한 두 개의 스택 사용
  // 커서 왼쪽의 문자들은 leftStack에, 오른쪽 문자들은 rightStack에 저장
  const leftStack = [];
  const rightStack = [];
  
  for (let i = 0; i < keystrokes.length; i++) {
    const key = keystrokes[i];
    
    switch (key) {
      case '<':
        // 커서를 왼쪽으로 이동: leftStack의 top을 rightStack으로 이동
        if (leftStack.length > 0) {
          rightStack.push(leftStack.pop());
        }
        break;
        
      case '>':
        // 커서를 오른쪽으로 이동: rightStack의 top을 leftStack으로 이동
        if (rightStack.length > 0) {
          leftStack.push(rightStack.pop());
        }
        break;
        
      case '-':
        // 백스페이스: leftStack의 top 제거 (커서 왼쪽 문자 삭제)
        if (leftStack.length > 0) {
          leftStack.pop();
        }
        break;
        
      default:
        // 일반 문자: leftStack에 추가
        leftStack.push(key);
        break;
    }
  }
  
  // 최종 결과 생성: leftStack + rightStack(역순)
  // rightStack은 역순으로 추가해야 원래 순서가 됨
  const password = leftStack.join('') + rightStack.reverse().join('');
  results.push(password);
}

// 모든 결과 출력
console.log(results.join('\n'));
