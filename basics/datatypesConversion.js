let score = 54 //defined on the frontend
let score2 = "34"
//but if you are only working on backend
// to know it's datatype
// const {score} = req.body;
let score3 = "33ad"
console.log(typeof score) //number

console.log(typeof(score2)) //string


// to convert score2 into number
let valueInNumber = Number(score2) 
console.log(typeof valueInNumber) //number

let valueInNumber2 = Number(score3) 
console.log(typeof valueInNumber2)//number
console.log(valueInNumber2)//NaN as score3 = 33ad is not a pure number

// to convert boolean
let istrue = true
let istrue2 = false
let booleanInNumber= Number(istrue2) 
console.log(typeof istrue)
console.log(typeof booleanInNumber);  // "number"

// "33" => 33 can change normal string into number
//"33ad" =>NAN
//true=>1 false=>0
// 1=> true, 0=>false
//" " => false
//"komal" =>true
//345 => "345" (convert to string)
let isloggedIn = 1

let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn) //true

let it = ""
let boolenIt = Boolean(it)
console.log(boolenIt) //false for empty string

// in strings

let someNumber = 389
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof (stringNumber))//string



 //OPERATIONS
console.log(2+2)//addition operation
console.log(2-2)
console.log(2*2)
console.log(2**3) //power operation
console.log(3/9)
console.log(2%3)//remindar

let str1 = "hello"
let str2 ="world"
let str3 = str1 + " "+ str2;
console.log(str3) //hello world

//problems (don't write in this way)
console.log("1" +2)//12
console.log(1+"2")//12
console.log("1" + 2+2)//122
console.log(1+2+"2")//32

console.log(+true) //1
console.log(+"")//0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
++gameCounter; //read the difference
console.log(gameCounter)