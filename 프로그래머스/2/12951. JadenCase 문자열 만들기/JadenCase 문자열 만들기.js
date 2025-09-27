function solution(s) {
    var answer = '';
    const sArray = s.split(' ');
    answer = sArray.map((word)=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    return answer;
}