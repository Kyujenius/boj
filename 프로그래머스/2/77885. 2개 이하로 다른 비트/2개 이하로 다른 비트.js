function solution(numbers) {
    var answer = [];
    numbers.forEach((number)=> {
        //짝수면 1만 더하면 됨,
        if(number % 2 ===0) {
            answer.push(number+1);
        }else{
        //홀수면 1더하고, 
            let numTo2 = number.toString(2);
            numTo2 = '0' + numTo2;
            const arrAs2 = numTo2.split("");
            for(let i = arrAs2.length-1; i>=0; i--) {
                if(arrAs2[i] === '0') {
                    // console.log(arrAs2, i);
                    arrAs2[i+1] = '0';
                    arrAs2[i] = '1';
                    // console.log(arrAs2, i);
                    break;
                }
            }
            numTo2 = arrAs2.join("");
            const numTo10 = parseInt(numTo2,2);
            // console.log(numTo10);
            answer.push(numTo10);
        }
    })
    return answer;
}