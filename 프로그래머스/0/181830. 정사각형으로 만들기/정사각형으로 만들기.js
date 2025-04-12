function solution(arr) {
    const width = arr[0].length;
    const height = arr.length;
    const N = Math.max(width,height);
    var answer = Array.from(Array(N), () => Array(N).fill(0));

    console.log(`width: ${width}, height: ${height}, N : ${N}`)
    
    for(let i= 0; i<height; i++) {
        for(let k =0; k<width; k++) {
            answer[i][k] = arr[i][k];
        }
    }
    
    return answer;
}