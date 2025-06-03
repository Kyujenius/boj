function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        let c = (a + b) % 1000000007;
        a = b;
        b = c;
    }
    return b;
}
