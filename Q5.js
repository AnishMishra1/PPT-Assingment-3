function sumOneLast(arr){
    
    let max = Math.max(...arr)
    for(let i=0; i<arr.length; i++){
    if(arr[i]=== max){
        arr[i] = max+1
    }


   }
   return arr

    
}

console.log(sumOneLast([1,2,3]));