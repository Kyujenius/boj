function solution(m, musicinfos) {
    let bestSongRunTime = 0;
    let bestSong = '(None)';
    function transformer(a) {
        a = a.replace(/C#/g,'c')
        .replace(/D#/g,'d')
        .replace(/F#/g,'f')
        .replace(/G#/g,'g')
        .replace(/A#/g,'a')
        .replace(/B#/g,'b');
        
        return a;
    }
    m = transformer(m);
    
    musicinfos.forEach((music)=> {
        let [startTime,endTime,musicName,sound] = music.split(",");
        const [startH,startM]= startTime.split(":").map(Number);
        const [endH,endM]= endTime.split(":").map(Number);
        const runTime = (endH * 60 + endM) - (startH * 60 + startM);
        
        sound = transformer(sound);
        
        let song = "";
        
        for(let i = 0 ; i<runTime; i++) {
            song += sound[i % sound.length];
        }
        
        if(song.includes(m)) {
            if(bestSongRunTime < runTime) {
                bestSongRunTime = runTime;
                bestSong = musicName;
                console.log(bestSong);
                console.log(song);
                console.log(m);
            }
        }


        
    })
    return bestSong;
}