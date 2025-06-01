let position = [0,0];

function solution(dirs) {
    const commands = dirs.split("");
    const hash = {};
    commands.forEach((command) => {
        let beforeCommand = [...position];
        commander(command);
        let afterCommand = [...position];

        // 실제로 이동한 경우에만 저장
        if(beforeCommand[0] !== afterCommand[0] || beforeCommand[1] !== afterCommand[1]) {
            hash[`(${beforeCommand})-(${afterCommand})`] = 0;
            hash[`(${afterCommand})-(${beforeCommand})`] = 0;
        }
    })
    
    return Math.floor(Object.entries(hash).length / 2);
}

function commander(command) {

    switch(command){
        case "U":
            if(position[1] < 5) {  // 위로 갈 때는 5 미만인지 체크
                position[1] += 1;
            }
                                    return position;

            break;
        case "D":
            if(position[1] > -5) {  // 아래로 갈 때는 -5 초과인지 체크
                position[1] -= 1;
            }
                                    return position;

            break;
        case "L":
            position[0] -= 1;
            if(position[0] > 5) {
                position[0] -=1;
            }else if(position[0] < -5){
                position[0] +=1;
            }
                        return position;

            break;
        case "R":
            position[0] += 1;
            if(position[0] > 5) {
                position[0] -=1;
            }else if(position[0] < -5){
                position[0] +=1;
            }
                        return position;

            break;
    }
    console.log(`command(${command}) 후 : , ${position}`);
}