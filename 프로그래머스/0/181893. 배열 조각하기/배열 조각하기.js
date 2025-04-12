function solution(arr, query) {
    let newArr = arr;
    for(let i =0 ; i<query.length; i++) {
        const queryNumber = query[i];
        if(i %2 == 0) {
            newArr  = newArr.slice(0,queryNumber+1);
        }else {
            newArr  = newArr.slice(queryNumber, newArr.length);
        }
    }

    return newArr;
}