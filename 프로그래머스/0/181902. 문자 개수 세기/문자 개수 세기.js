function solution(my_string) {
    var answer = [];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charsArray = chars.split("");
    console.log(charsArray);
    const my_array = my_string.split("");
    let countArray = Array(52).fill(0);
    console.log(countArray);
    my_array.forEach((char) => {
        const index = charsArray.indexOf(char);
        countArray[index] += 1;
    })
    return countArray;
}