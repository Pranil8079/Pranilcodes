function nthFibonnachiNumber(num){
    let num1 = 0, num2 = 1;
    let nthFibonnachi;
    
    
    if(num === 1){
      return 0;
    }
    
    if(num === 2){
      return 1;
    }
    
  for(let i = 3; i <= num; i++){
    nthFibonnachi = num1 + num2;
    num1 = num2;
    num2 = nthFibonnachi;
      }
    
    return nthFibonnachi;
  }
  
  console.log(nthFibonnachiNumber(6));