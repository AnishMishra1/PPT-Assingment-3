function findnonRepeat(s){

    for(let i=0; i<s.length;i++){
        if(s.indexOf(s[i]) ===s.lastIndexOf(s[i])){
            return s[i];
        }
    }
    return -1;
}

let s = [2,2,1]
console.log(findnonRepeat(s));