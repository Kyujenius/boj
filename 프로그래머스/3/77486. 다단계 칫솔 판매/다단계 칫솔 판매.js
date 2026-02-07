function solution(enroll, referral, sellerArr, amount) {
    var answer = [];
    const graph = {};
    const graphAmount ={};
    enroll.forEach((value)=> {
        graph[value] = ''
    })
    referral.forEach((value,index)=> {
        graph[enroll[index]] = value;     
        graphAmount[enroll[index]] = 0;    
    })
    
    // console.log(graph);
    
    
    sellerArr.forEach((seller,index)=> {
        
        //최초의 번 돈
        let sellAmount = amount[index] * 100;
        
        //while 문을 돌며 떼야하는 세금
        while(sellAmount >=1) {
            
            const parent = graph[seller];
            
            
            let tax = Math.floor(sellAmount * 0.1);
            sellAmount = sellAmount - tax;
            // console.log(seller,'->',parent, sellAmount, tax);
            //세금 떼고 한 번 값 넣어주기
            graphAmount[seller] += sellAmount;
            sellAmount = tax;
            if(parent === '-') break;
            //교체
            seller = parent;
        }
    })
    
    // console.log(graphAmount);
    for(const key in graphAmount) {
        answer.push(graphAmount[key]);
    }
    
    return answer;
}

// enroll  = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"]
// referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"]
// seller = ["young", "john", "tod", "emily", "mary"]
// amount = [12, 4, 2, 5, 10]
// result = [360, 958, 108, 0, 450, 18, 180, 1080]