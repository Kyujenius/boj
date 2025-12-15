function solution(skill, skill_trees) {
    var answer = 0;
    const skillObj = {};
    const skillArray = skill.split("");
    skillArray.forEach((value,index,array)=> {
        for(let i = 0; i<index; i++) {
            if(skillObj[value] == undefined) {
                skillObj[value] = [array[i]];
            }else {
                skillObj[value].push(array[i]);
            }
        }
    })
    console.log(skillObj);
    //이제 스킬트리 하나씩 돌아가면서, 각 스킬트리 내에서 또 확인하면서 조건 충족하는지 확인하기!
    for(let i = 0 ; i<skill_trees.length; i++) {
        const tree = skill_trees[i];
        let isGoodCharacter = true;
        let badPatternChecker = [];
        for(let j = 0; j<tree.length; j++) {
            // 무조건 있어야 하는 스킬들
            const shouldHaveSkill = skillObj[tree[j]];
            if(shouldHaveSkill !== undefined) {
                badPatternChecker = [...badPatternChecker, ...shouldHaveSkill]
            }
            
            //있으면 안 되는 걸 만나버리면 이제 아웃!
            if(badPatternChecker.some((value)=> value == tree[j])) {
                console.log(tree, badPatternChecker,"안에 있는 건 있으면 안 되는데 있네..? :" ,tree[j]);
                isGoodCharacter = false;
                break;
            }
            
            //있어야 하는 게 없으면 아웃!
            const treeSlice = tree.slice(0,j+1);
            if(badPatternChecker.some((value) => treeSlice.indexOf(value) == -1)) {
                console.log(tree, badPatternChecker,"가 안에 있어야하는데 없네..? :" ,treeSlice);
                isGoodCharacter = false;
                break;
            }
        }
        if(isGoodCharacter) answer++;
    }
    return answer;
}