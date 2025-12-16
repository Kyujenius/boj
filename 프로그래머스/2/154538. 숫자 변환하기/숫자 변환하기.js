function solution(x, y, n) {
    var answer = 0;

    const obj = {};
    obj[0]=[x];
    const set = new Set();
    for(let i = 0 ; i<13; i++) {
        const array= obj[i];
        const newArray = [...array.map((value) => {
            if(!set.has(value + n) {
               return value +n;
               }}), ...array.map((value)=>{if(!set.has(value*2)) {
                          return value *2;
                          }}),...array.map((value) => {if(!set.has(value*3)) {
                          return value*3;
                          }})] ;
        obj[i+1] = newArray;
    }
    // console.log(obj);
    for(let i = 0; i<13; i++) {
        const array= obj[i];
        // console.log(array);
        if(array[0] > y) {
            return -1;
        }else if(array.some((value) => value == y)) {
            return i;
        }

    }
    
    
    return answer;
}