/**
5000
2500
1250
625 (+1)
312
216
108
54
27 (+1)
13 (+1)
6 
3 (+1)
1 (+1)

*/
function solution(n)
{
    var ans = 1;
    while(n!==1) {
        if(n % 2 !== 0) {
            ans++;
        }
        n= Math.floor(n/2);
    }
    
    return ans;
}