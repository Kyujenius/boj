function solution(genres, plays) {
    const object = {};
    var answer = [];
    genres.forEach((value,index) => {
        if(!object[value]) {
            object[value] = [{
                id: index,
                playTime: plays[index],
            }]
        }else {
            object[value].push({
                id: index,
                playTime: plays[index],
            })
        }
    })
    // console.log(object);
    const entry = Object.entries(object);
    entry.sort((a,b)=>{
        let bSum = 0;
        let aSum = 0;
        const bLength = b[1].length;
        const aLength = a[1].length;
        for(let i =0  ; i<bLength; i++) {
            bSum += b[1][i].playTime
        }
        for(let i =0  ; i<aLength; i++) {
            aSum += a[1][i].playTime
        }
        return bSum-aSum;
    })
    entry.forEach((value)=> {
        // console.log(value[1]);
        value[1].sort((a,b)=> {
            return b.playTime - a.playTime
        });
        answer.push(value[1][0].id);
        if(value[1][1]) {
            answer.push(value[1][1].id);
        }
    })
    
    // console.log(entry[0]);
    
    return answer;
}