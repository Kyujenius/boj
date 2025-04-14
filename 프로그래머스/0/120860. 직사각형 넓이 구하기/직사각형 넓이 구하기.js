function solution(dots) {
    var answer = 0;
    dots.sort(([x,y],[x2,y2])=> {
        return x - x2;
    }) 
    console.log(dots);
    const A = dots[0];
    const B = dots[1];
    const C = dots[2];
    const D = dots[3];
    console.log(A,B,C,D);
    
    const width = A[0] - C[0];
    const height = A[1] - B[1];
    
    answer = Math.abs(width * height);
    
    return answer;
}