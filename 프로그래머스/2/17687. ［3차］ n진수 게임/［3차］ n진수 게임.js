function solution(n, t, m, p) {
    var answer = '';
    //1. 일단 0부터 차례대로 모든 숫자를 n 진수로 바꾼다.
    //2. 바꾼 숫자를 토대로 m 개씩 자른다.
    //3. 잘린 m개중 p번째의 숫자를 붙인다. 
    let array = [];
    for(let i = 0; i<t * m; i++) {
        const nNUm = i.toString(n).split('');
        for(let j = 0; j<nNUm.length; j++) {
            array.push(nNUm[j]);    
        }
        
    }
    // console.log(array);
    for(let i = 0; i<t; i++) {
        const round = array.splice(0,m);
        let word = round[p-1];
        answer += word[0].toUpperCase();
    }
    return answer;
}