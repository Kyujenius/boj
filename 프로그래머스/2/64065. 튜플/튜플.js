function solution(s) {
    var answer = [];
    const slicedS = s.slice(1,s.length-1);
    const doubleSlicedS = slicedS.slice(1,slicedS.length-1);
    const array = doubleSlicedS.split(`},{`);
    const newNumberSet = new Set();
    array.sort((a,b)=> a.length- b.length );
    // console.log(array);
    array.forEach((value) => {
        const numArray = value.split(",");
        numArray.forEach((number)=> {
            newNumberSet.add(number);
        })
    })
    answer = [...newNumberSet].map((value)=> parseInt(value,10));
    // console.log(array);
    // console.log(newNumberSet);
    return answer;
}