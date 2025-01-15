function findDuplicates(array) {
    let duplicate=[]
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] === array[j]){
                let isAlreadyDuplicate=false;
                for(let k=0; k<duplicate.length; k++){
                    if(array[k]===array[i]){
                        isAlreadyDuplicate=true;
                        break;
                    }
                }
                
                if(!isAlreadyDuplicate){
                    duplicate.push(array[i])
                }
            }
        }
    }
    return duplicate;
}

const array2 = [3, 5, 6, 3, 7, 5, 8];
console.log(findDuplicates(array2));
