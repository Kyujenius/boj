var answer = '';
var count = 0;

function solution(code) {
var mode = 0;
    while(count < code.length){
        let fn = code[count];
        mode = customFn(mode,fn);
    }
    if(answer == "") {
        answer = "EMPTY"
    }
    return answer;
}

function customFn(mode, char) {
    switch(char) {
        case "1":
            if(mode == 0) {
                mode = 1;
            }else {
                mode= 0;
            }
            count++;
            break;
        default: 
            if(mode == 0) {
                if(count % 2 ==0) {
                    answer += char;
                }
            }else {
                if(count % 2 !== 0) {
                    answer += char;
                }
            }
            count++;    
            break;
    }
    return mode;

}