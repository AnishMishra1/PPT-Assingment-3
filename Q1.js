function  sum(a,t){

  for(let i=0; i<a.length;i++){
   var result =a[i] +a[i+1]+a[i+2];
   var diff = result -t;
    
    
    if(diff >= t){
     
      break;
    }
    if(diff <= t){
        
        break;
    }
    else{
        return null;
    }
  }
  return result
  }
  
  
  console.log(sum([-1,2,1,-4],1));






