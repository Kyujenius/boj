function solution(user_id, banned_id) {
    var answer = 0;
    const idSet = new Set();

    function isMatched(user,ban) {
        if(user.length !== ban.length) return false;
        for(let i = 0 ; i<user.length; i++) {
            if(user[i] !== ban[i] && ban[i] !== "*") {
                return false;
            }
        }
        return true;
    }
    
    
    const newArr = [];
    const visited = Array(user_id.length).fill(false);
    function dfs(index) {
        //끝까지 갔어? 
        if(index === banned_id.length) {
            const finalArr = user_id.filter((value,index) => {
                if(visited[index] === true) {
                    return true;
                }else {
                    return false;
                }
            })
            idSet.add(finalArr.join(','));
            return;
        }
        
        //탐색 시작!
        for(let i = 0 ; i<user_id.length; i++) {
            if(visited[i]) continue;
            
            if(isMatched(user_id[i], banned_id[index])) {
                visited[i] = true;
                
                dfs(index+1);
                
                visited[i] = false;
            }
        }
    }
    
    dfs(0);
    return idSet.size;
}