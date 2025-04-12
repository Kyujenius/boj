function solution(arr) {
    const width = arr[0].length;
    const height = arr.length;
    const N = Math.max(width,height);
    var answer = Array.from(Array(N), () => Array(N).fill(0));

    console.log(`width: ${width}, height: ${height}, N : ${N}`)
    
    for(let i= 0; i<N; i++) {
        for(let k =0; k<N; k++) {
            try{
            if(arr[i][k] !==undefined) {
                answer[i][k] = arr[i][k];
            }else {
                answer[i][k] = 0
            }
                }
            catch {
                                answer[i][k] = 0

            }
        }
    }
    
    return answer;
}