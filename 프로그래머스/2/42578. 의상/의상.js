function solution(clothes) {
    var answer = 0;
    let object = {};
    let result = 1;
    clothes.forEach(([value,key])=> {
            if(!object[key]){
                object[key] =1;
            }else {
                object[key] +=1;
            }
        }
    )
    const values = Object.values(object);
    console.log(values);
    values.forEach((value) => {
        result = result * (value +1) ;
    })
    answer = result -1 ;
    return answer;
}