function solution(phone_book) {
    let answer = true;
    const headArray = [];
    phone_book.sort();
    console.log(phone_book);
    for(let i = 0; i<phone_book.length; i++) {
        // console.log(`value: ${value}, head: ${head}`)
        if(phone_book[i].startsWith(phone_book[i-1])){
            answer = false;
            return answer;
        }
    }
        // console.log(`headArray: ${headArray}`);
    return answer;
}