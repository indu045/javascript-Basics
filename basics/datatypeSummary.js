// datatype categorization is done on the basics that 
// how it is stored and access in the memory

// #Primitive and Non-Primitive(reference type)

// Primitive (copy is given not the reference)
// 7types: String, Number, Boolean, null, undefined, Symbol, BigInt



// JavaScript is dynamically typed — not statically typed.

// What does "dynamically typed" mean?
// Variables do not have fixed types.

// You can assign a value of any type to a variable, and later assign a different type to the same variable.

// let x = 5;        // number
// x = "hello";      // now it's a string
// x = true;         // now it's a boolean

// There’s no need to declare types explicitly, and the type of a variable is determined at runtime, not during compilation.

// In statically typed languages (like C++, Java, or TypeScript), variables have fixed types declared at compile time.

// Type errors in JavaScript are caught only at runtime, not before execution.

const id = Symbol('223')
const anotherId= Symbol('223')

console.log(id === anotherId);
//false 
//as the symbol makes them unique even if we pass same numbers

const bigNumer = 34344444444444342n
console.log(typeof(bigNumer))
//can add n at the end to make it big int or if the number is big enough it will be bigInt

// Non-Primitive(Reference type)
// Array, Objects, functions

//Array
const minions = ["Kevin", "Stuart", "Bob"]
//objects
let myObj ={
    name:"kevin",
    color:"yellow"
}
//functions
const myFunction = function (){
    console.log("hello")
}
//read about typeof
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//-----------------------------------------------------

// stack and heap memory
// stack : Primitive (ismein orginal value ki copy milti h)
// Heap : Non-Primitive(here we ger reference of Original Value)

let name = "thv.com"; //go in stack
let othername = name;
console.log(othername)

othername = "pjm.com"
console.log(othername) //pjm.com

console.log(name) //thv.com
//as in primitive type we get copy of the original value
// so changes will not reflect in the original value

let userOne = {
    email: "user@gamil.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email ="jk@gmail.com"

console.log(userOne.email)//jk@gmail.com
console.log(userTwo.email)//jk@gmail.com
//as it is passed by reference

// Stack Memory (Primitive / Reference Variables)
// ┌────────────────────┐
// │     userTwo        │
// │     ───────────────┼─────────┐
// │                    │         │
// ├────────────────────┤         ▼
// │     userOne        │      ┌────────────────────────────┐
// │     ───────────────┼─────▶│  email: "user@google.com"  │
// │                    │      │  upi: "user@yl"            │
// ├────────────────────┤      └────────────────────────────┘
// │         Name       │                    ▼
// ├────────────────────┤                   HEAP
// │       othername    │
// ├────────────────────┤
// │            Name    │
// └────────────────────┘
//       STACK

// // Heap Memory (Object / Non-Primitive)
//                      ┌────────────────────────────┐
//                      │  email: "user@google.com"  │
//                      │  upi: "user@yl"            │
//                      └────────────────────────────┘
