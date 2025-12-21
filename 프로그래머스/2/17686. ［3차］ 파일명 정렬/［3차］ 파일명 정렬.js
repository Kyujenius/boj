function solution(files) {
    const regex = /^(\D+)(\d+)/;
    files.sort((a,b)=> {
        const aMatch = a.match(regex);
        const bMatch = b.match(regex);
        // console.log(aMatch,bMatch);
        const aHeader = aMatch[1].toUpperCase();
        const bHeader = bMatch[1].toUpperCase();
        
        const aBody = parseInt(aMatch[2]);
        const bBody = parseInt(bMatch[2]);
        
        if(aHeader > bHeader) return 1;
        if(aHeader < bHeader) return -1;
        
        if(aBody > bBody) return 1;
        if(aBody < bBody) return -1;
        
        return 0;
        
    })
    return files;
}