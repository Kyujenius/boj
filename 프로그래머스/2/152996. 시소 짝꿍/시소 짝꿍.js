function solution(weights) {
    var answer = 0;
    const weightObj = {};
    
    weights.forEach((weight)=> {
       if(weightObj[weight] == undefined) {
            weightObj[weight] = 1;
        }else {
            weightObj[weight] += 1;  
        }
    })
    // console.log(weightObj);
    
    for(const weight in weightObj) {
        const n = weightObj[weight];
        const numWeight = parseInt(weight)
        if(n >= 2) {
            answer += (n*(n-1)) / 2
        }
        const threeDevidedByTwo = numWeight * (3/2) ;
        if(weightObj[threeDevidedByTwo]) {
            const m = weightObj[threeDevidedByTwo]
            answer += n*m
        }
        const two = numWeight * 2 ;
        if(weightObj[two]) {
            const m = weightObj[two]
            answer += n*m
        }
        const fourDevidedThree = numWeight * (4/3);
        if(weightObj[fourDevidedThree]) {
            const m = weightObj[fourDevidedThree]
            answer += n*m
        };
        
        console.log(n,threeDevidedByTwo,two,fourDevidedThree)
    }
    return answer;
}