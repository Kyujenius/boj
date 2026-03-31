function solution(s)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for(let i = s.length; i>=1; i--) {
        for(let j = 0; j<=s.length-i; j++) {
            const str = s.slice(j,i+j);
            
            // if(str.length === 0) continue;
            // console.log(str);
            if(isPalindrome(str)=== true) {
                return str.length;
            }
        }
    }
    return answer;
}

// console.log((isPalindrome("abccba")))
//문자열 s의 길이 : 2,500 이하의 자연수
//isPalindrome 이란 함수를 먼저 만든다.
function isPalindrome(str){
    const half = Math.floor(str.length / 2);
    for (let i = 0; i < half; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
//
