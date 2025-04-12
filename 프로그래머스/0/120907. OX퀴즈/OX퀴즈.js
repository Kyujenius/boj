function solution(quizs) {
    var answer = [];
    const arrays = [];
    quizs.forEach((quiz) => arrays.push(quiz.split(" ")))
    
    arrays.forEach((array) => {
        const X = parseInt(array[0]);
        const fn = array[1];
        const Y = parseInt(array[2]);
        const Z = parseInt(array[4]);
        if(customFn(fn, X,Y,Z)) {
            answer.push("O");    
        }else {
            answer.push("X");    
        }
        
        }
    )
    
    return answer;
}
function customFn(fn,X,Y,Z) {
    switch(fn) {
        case "-":
            console.log(X,Y,Z);
            return (X-Y) == Z;
            break;
            
        case "+":
            console.log(X,Y,Z);
            return (X+Y) == Z;
            break;
            
    }
} 