function solution(expression) {
    var answer = 0;

    // 2. 숫자와 연산자를 분리하여 배열로 만들기
    // 정규표현식을 사용하면 숫자와 연산자를 깔끔하게 나눌 수 있습니다.
    const nums = expression.split(/[^0-9]/).map(Number);
    const ops = expression.split(/[0-9]/).filter(v => v);
    
    const expressesArr = [["*","+","-"],["*","-","+"],["+","*","-"],["+","-","*"],["-","+","*"],["-","*","+"]];
    let max = 0;
    // console.log(nums,ops);
    expressesArr.forEach((expresses)=> {
        
        const tempNums = [...nums];
        const tempOps = [...ops];
        for(let i = 0 ; i<3; i++) {
            const exp = expresses[i];
  
            for(let j = 0; j<tempOps.length; j++) {
                if(tempOps[j] === exp) {
                    const result = operating(tempNums[j],tempNums[j+1],exp);
                    tempNums.splice(j,2,result);
                    tempOps.splice(j,1);
                    j--;
                    // console.log(tempNums,tempOps);
                }    
            }
        }
        // console.log("--------",expresses, max,"--------")
        max = Math.max(Math.abs(tempNums[0]),max);
    })
    return max;
}

function operating(num1,num2,operator) {
    switch(operator){
        case "*":
            return num1*num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "+":
            return num1+num2;
            break;
    }
}
