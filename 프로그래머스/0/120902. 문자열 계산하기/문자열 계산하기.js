function solution(my_string) {
    const array = my_string.split(" ");
    let result = parseInt(array[0]);
    console.log(array, result);
    let index = 0;
    while(index < array.length+2) {
        const fn = array[index+1];
        const B = parseInt(array[index+2]);
        console.log(fn,B);
        switch(fn) {
            case "+":
                result = result + B;
                break;
            case "-":
                result = result - B;
                break;
        }
        console.log(index, result);
        index = index+2;
    }
        
    return result;
    
}