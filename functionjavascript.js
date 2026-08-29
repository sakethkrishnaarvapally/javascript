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
