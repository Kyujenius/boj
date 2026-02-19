function solution(user_id, banned_id) {
    var answer = 0;
    const matchedSet = new Set();
    const visited = Array(user_id.length).fill(false);
    
    function dfs(idx) {
        if(idx === banned_id.length) {
            const currentSet = user_id.filter((_, i) => visited[i]).sort().join(",");
            matchedSet.add(currentSet);
            return;
        }
        const bannedId = banned_id[idx];
        for(let i = 0; i<user_id.length; i++) {
            const userId = user_id[i];
            if(isMatched(userId,bannedId) && !visited[i]) {
                visited[i] = true;
                dfs(idx+1);
                visited[i] = false;
            }    
        }
    }
    
    dfs(0);
    
    return matchedSet.size;
}


//불량 사용자 아이디를 기준으로 match 하는지 확인
function isMatched (strA,strB) {
    if(strA.length === strB.length) {
        for(let i = 0 ; i<strA.length; i++) {
            if(strB[i] !== "*") {
                if(strA[i] !== strB[i]) {
                    return false;
                }
            }
        }
        return true;
    }else {
        return false;
    }
}
//match 한지 확인하고, match 하면 visited 로 표시