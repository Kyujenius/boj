function solution(w, h) {
    var answer = 1;
    const GCD = gcd(w,h);
    const optimizedW = w / GCD;
    const optimizedh = h / GCD;
    answer = w * h - ((optimizedW + optimizedh -1) * GCD)
    
    return answer;
}

function gcd(a,b) {
  //a 와 b 의 최대 공약수 구하기
  if(a%b === 0) return b;
  return gcd(b,a%b);
}

console.log(gcd(8,12));

