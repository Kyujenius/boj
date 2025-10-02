function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc,curr,index,array)=> 
        (acc = lcm(acc,curr)))
    return answer;
}

function gcp(a,b) {
    if(b === 0) {
        return a;
    }else {
        return gcp(b, a % b);
    }
}

function lcm(a,b) {
    return (a*b)/ gcp( a , b );
}