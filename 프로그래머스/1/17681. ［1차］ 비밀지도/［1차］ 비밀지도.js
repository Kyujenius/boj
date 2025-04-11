function solution(n, arr1, arr2) {

    const newArr1 = [];
    const newArr2 = [];
    const resultArray = Array.from(Array(n), () => Array(n).fill(" "));
    for(let i = 0 ; i<n; i++) {    

        
         newArr1.push(mapping(arr1[i],n));
         newArr2.push(mapping(arr2[i],n));
        
    }
    for(let i = 0 ; i<n; i++) {    
         for(let k = 0 ; k < n; k++) {
            if(newArr1[i][k] == "#" || newArr2[i][k]=="#") {
                resultArray[i][k] = "#"
            }else {
                resultArray[i][k] = " "
            }
         }
    }
    for(let i = 0 ; i<n;i++) {
     resultArray[i] = resultArray[i].join("");   
    }
     
    
    var answer = resultArray;
    return answer;
}

function mapping (number,n) {
    let changingNumber = number;
    let changingN = n-1;
    let returnArr = [];
    for (let i = 0 ; i<n; i++) {
            if(changingN>=0) {
            let doubledN = 2**changingN;
            if(changingNumber - doubledN >= 0) {
                returnArr.push("#");
                changingN -= 1;
                changingNumber -= doubledN;
            }else {
                changingN -= 1;
                returnArr.push(" ");
            }
        }else {

            break;
        }
    }

   
    return returnArr;
}