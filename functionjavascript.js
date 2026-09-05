/*
function <function-name([parameters list]){
    body of function
    [return expression/variable]
}
*/

function greet(){
    console.log('Understanding of Functions!')
}

greet()

// Passing a parameters to a function

function sum(a,b){
    console.log('Sum of two Numbers: ',a+b)
}
sum(2,5)
sum(3.8,6.3)
sum('Hello','Mani !')

//Return from function 

function add(x,y){
    return x+y
}
let suma=add(154,786)
console.log(suma)

//function expression

let mul =function(a,b){
    return a*b
}
console.log(mul(10,2))

//Arrow function

let sub=(a,b)=>a-b
console.log(sub(10,5))

let add1=(a,b)=>{ return a+b}
console.log(add(10,5))

//Callback function

function guest1(){
    console.log('Hello Guest 1')
}
function guest2(){
    console.log('Hello Guest 2 ')
}
    
function callbackfunction(guestFunction){
    guestFunction()
}

callbackfunction(guest1)
callbackfunction(guest2)

//callback function with arguments

function add2(x,y){
    return x+y
}

function sub2(x,y){
    return x-y
}

function mul2(x,y){
    return x*y
}

function callbackfunction2(x,y,operation){
    return operation(x,y)
}

console.log(callbackfunction2(10,5,add2))
console.log(callbackfunction2(10,5,sub2))
console.log(callbackfunction2(10,5,mul2))


