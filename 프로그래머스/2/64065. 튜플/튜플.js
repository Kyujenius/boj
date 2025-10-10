function solution(s) {
    var answer = [];
    const slicedS = s.slice(2, s.length-2);
    const slicedSArray = slicedS.split(`},{`);
    const tupleSet = new Set();
    slicedSArray.sort((a,b)=>a.length-b.length);
    console.log(slicedSArray);    
        
    slicedSArray.forEach((value)=> {
        const array = value.split(',');
        array.forEach((number)=> {
            tupleSet.add(number);
        })
    })
    answer = [...tupleSet].map((value)=> parseInt(value,10));

    return answer;
}