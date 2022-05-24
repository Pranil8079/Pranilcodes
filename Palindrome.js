//let num = 1234;

let num = 123
let reverse = 0;
let remainder;
//for(let i = 0; i <= 50; i++){
  //return(i);
  while(num != 0){
    remainder = num %  10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
  }
 //if(reverse == i){
   console.log(reverse);
 //}




/*while(num != 0){
  remainder = num % 10;
  reverse = reverse * 10 + remainder;
  num = Math.floor(num / 10);
}*/
