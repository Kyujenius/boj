function solution(n) {

    const string = n.toString().split("");
    const reversed = string.reverse().map(Number);
    return reversed;
}