function FindIndex(nums, target) {

    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
        if(target === 0){
            return 0;
        }
        
    }
    if(nums.length<target){
        
            return nums.length
        }
        else{
            return target-1
        }
    
    
    
};

console.log(FindIndex([1,3,5,6],5));



