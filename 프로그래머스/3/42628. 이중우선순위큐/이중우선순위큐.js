function solution(operations) {
    var answer = [];
    operations.forEach((oper)=> {
        operation(oper);
    })
    function operation(oper) {
        
        const operString = oper.split(" ");
        const operation = operString[0];
        const number = operString[1];
        
        switch(operation){
            case "I":
                answer.push(number);
                break;
            case "D":
                if(operString[1] == 1){
                    if(answer.length >0) {
                        const numAnswer = answer.map((num)=> parseInt(num))
                        const maxNum = Math.max(...numAnswer);
                        const maxIdx = answer.indexOf(maxNum.toString());
                        answer.splice(maxIdx,1);    
                    }
                    
                }else if(operString[1] == -1){
                    if(answer.length >0) {
                        const numAnswer = answer.map((num)=>parseInt(num))

                        const minNum = Math.min(...numAnswer);
                        // console.log("minNUm", minNum);
                        const minIdx = answer.indexOf(minNum.toString());
                        answer.splice(minIdx,1);
                    }
                }
                break;                
        }
        // console.log(oper, answer);
            
    }
    if(answer.length == 0) {
     answer = [0,0]   
    }else {
        answer = [Math.max(...answer),Math.min(...answer)]
    }
    return answer;
}
