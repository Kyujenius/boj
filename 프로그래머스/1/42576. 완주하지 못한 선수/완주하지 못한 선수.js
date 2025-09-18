function solution(participant, completion) {
    
    var answer = '';
    let result = {};
    participant.forEach((value, index) => {
      if (result[value]) {
        result[value] += 1;
      } else {
        result[value] = 1;
      }
    });
    
    completion.forEach((value,index) => {
        result[value] -= 1;
    })


    
    for(let key in result) {
     if(result[key] == 1) return key;   
    }
}