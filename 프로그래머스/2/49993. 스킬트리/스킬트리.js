function solution(skill, skill_trees) {
    var answer = 0;
    const skillArray = skill.split("");
    const skillBook = {};
    skillArray.forEach((value, index, array) => {
        for(let i = 0 ; i<index; i++) {
            if(skillBook[value] == undefined) {
                skillBook[value] = [];    
            }
            skillBook[value].push(array[i]);    
        }
        
    })
    console.log(skillBook);
    
    skill_trees.forEach((skillTree,index,array)=> {
        let isSuccess = true;
        for(let i= 0; i<skillTree.length; i++) {
            //그냥 여기서 B를 만날 시에(스킬북에 있는 거면) 그 앞단에, 다 있는지 확인
            if(skillBook[skillTree[i]] !== undefined) {
                const shouldHaveSkill = skillBook[skillTree[i]];
                // 스킬북에 있어야하는 모든 스킬들을 잘라서 봤을 때 -1이 아니면 (존재하면) 통과
                console.log(skillBook[skillTree[i]], "검증할 놈: ",skillTree.slice(0,i), )
                if(shouldHaveSkill.some((value)=> skillTree.slice(0,i).indexOf(value) == -1)) {
                    console.log("응 실패")
                    isSuccess = false;
                    break;
                    
              }
            }
        }
        if(isSuccess) {
            answer++;
        }
    })
    return answer; 
}