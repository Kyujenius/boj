function solution(sequence) {
    var answer = 0;
    const map1 = sequence.map((value,index) => index % 2 == 0 ? value*(-1) : value);
    const map2 = sequence.map((value,index) => index % 2 == 0 ? value : value * (-1));
    
    let max1 = 0;
    let max2 = 0;
    
    let temp1 = 0;
    let temp2 = 0;
    
    //만약 길이가 1이면 바로 리턴
    for(let i = 0; i< map1.length; i++) {
        temp1 = Math.max(map1[i], temp1+map1[i]);
        max1 = Math.max(max1,temp1);
    }
    
    for(let i = 0; i< map2.length; i++) {
        temp2 = Math.max(map2[i], temp2+map2[i]);
        max2 = Math.max(max2,temp2);

    }
    // console.log(map1);
    // console.log(map2);
    answer = Math.max(max1,max2)
    return answer;
}