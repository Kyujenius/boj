function solution(n, stations, w) {
    var answer = 0;
    const newStation = [];
    // 1. 초기 stations 를 기준으로 W씩 전 후로 1 넣어주기 나머지는 0 으로 두기
    stations.forEach((station) => {
        let start = station - w
        let end = station + w ;
        // console.log(start,end);
        if(start < 0) start = 0;
        if(end > n-1) end = n;
        newStation.push([start,end]);
    })
    // console.log(newStation)
    answer += Math.ceil((newStation[0][0] -1)/ (1+2*w));
    newStation.forEach((station,index, array)=> {
        const nextStation = array[index+1]
       if(nextStation !== undefined) {
          answer += Math.ceil((nextStation[0] - station[1] -1) / (1+2*w));
       }
    })
    answer += Math.ceil((n - newStation[newStation.length-1][1])/ (1+2*w));

    return answer;
}