function solution(s) {
    var answer = Infinity;
    const n = Math.ceil(s.length/2);
    let cur = '';
    
    //1부터 반까지 자르려는 숫자 정하기
    for(let i = 1; i<=n; i++) {
        const arr = s.split("");
        let count = 1;
        const answerArr = [];
        while(true) {
            const sliced = arr.splice(0,i);
            if(sliced.length ===0) {
                if(count !== 1 && cur !== sliced.join("")){   
                answerArr.push(`${count}${cur}`);
                cur = sliced.join("");
                count = 1;
            }else if(count === 1 && cur !== sliced.join("")){
                answerArr.push(cur);
                cur = sliced.join("");
                count = 1;
            }
            break;
            }
            
            if(cur === '') {
                cur = sliced.join("");
            }
            else if(cur === sliced.join("")) {
                count++;
            }else if(count !== 1 && cur !== sliced.join("")){   
                answerArr.push(`${count}${cur}`);
                cur = sliced.join("");
                count = 1;
            }else if(count === 1 && cur !== sliced.join("")){
                answerArr.push(cur);
                cur = sliced.join("");
                count = 1;
            }
            
        }
        answer = Math.min(answerArr.join("").length, answer); 
        // console.log(answerArr);
    }
    return answer;
}

//