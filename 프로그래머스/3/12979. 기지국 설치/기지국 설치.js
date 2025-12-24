function solution(n, stations, w) {
    var answer = 0;
    const activeArea = stations.map(a=> {
        const newStart = a-w < 1 ? 1 : a-w
        const newEnd = a+w > n ? n : a+w;
        return [newStart,newEnd]                                      
    });
    // console.log(activeArea);
    
    answer += Math.ceil((activeArea[0][0]-1) / (1+(2*w)));
    activeArea.forEach(([a,b], index,array)=> {
            const nextArea = array[index+1];
            if(nextArea !== undefined) {
                const nextStart = nextArea[0];
                const inActiveArea = nextStart - b-1;
                answer += Math.ceil(inActiveArea / (1+(2*w)));
            }
    })
    answer += Math.ceil((n - activeArea[activeArea.length-1][1]) / (1+(2*w)));

    return answer;
}