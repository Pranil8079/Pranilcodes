//Pranil 

let x = 72
let y = 12

//Arithmetic operators
let z = x + y
let a = x - y
let b = x * y
let c = x / y

//Declaring String Variables
let sum = 'Addition is'
let sub = 'Subtraction is'
let mult = 'Multiplication is'
let div = 'Division is'

console.log(sum,z) //Addition
console.log(sub,a) //Subtraction
console.log(mult,b) //Multiplication
console.log(div,c) //Division

//Equality operators
console.log('Vales are same is',z == a)
console.log('Values are not same is',b != c)
//Relational operators
console.log('Is a is greater than or equal to b',a >= b)

//Increment/Decrement operators
z++
console.log('Increment by 1 is',z) //Increment operator
a--
console.log('Decrement by 1 is',a) //Decrement operator

//Type Coercion
let num1 = 2022
let num2 = 'Happy New Year'

console.log('Coercion is',num1 +num2)