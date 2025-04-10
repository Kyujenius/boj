function solution(num_list) {
    var answer = 0;
    const odd = [] ;
    const notOdd= [];
    for(let i = 0 ; i<num_list.length; i++) {
        if(isOdd(num_list[i])) {
            odd.push(num_list[i])
        }else {
            notOdd.push(num_list[i])
        }
    }
    answer = parseInt(odd.join("")) +parseInt(notOdd.join("")) 
    return answer;
}
function isOdd(num) {
    if(num%2 == 0) {
        return true
    }else {
        return false
    }
}