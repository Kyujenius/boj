function solution(str1, str2) {
    var answer = 0;
    let array = [];
    const secondLength = str2.length;
    const firstLength = str1.length;
    for(let k = 0; k<secondLength; k++) {
        for(let i = 0 ; i<firstLength; i++) {
           array.push(str2[i+k]);
        }    
        console.log(array.join(''));
        if(array.join('') == str1) {
            answer = 1;
        }
        array = [];
    }
    
    return answer;
}