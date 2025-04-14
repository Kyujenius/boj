function solution(id_pw, db) {
    var answer = '';
    const array = db.filter(([id,password])=> {
        return id === id_pw[0]
    })
    console.log(array);
    
    if(array.length > 0) {
        if(id_pw[1] == array[0][1]){
            return "login";
        }else {
            return "wrong pw";
        }
    }else {
        return "fail";
    }
    return answer;
}