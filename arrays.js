//Array in JAVASCRIPT
let arr=[1,2,3,4,5]
console.log(arr)

let arr1=new Array(1,2,3,4,5)
console.log(arr1)

//array with diiferent data types
let arr2=[1,'Hello',true,null,undefined,{name:'Mani',age:22},[1,2,3],function(){console.log('Hello')}]
console.log(arr2)

//Accessing array elements
console.log(arr2[0]) //1
console.log(arr2[1]) //Hello
console.log(arr2[5].name) //Mani
console.log(arr2[6][1]) //2
arr2[7]() //Hello

//Modifying array elements
arr2[1]='World'
console.log(arr2[1]) //World
arr2[5].age=23
console.log(arr2[5].age) //23
arr2[6][2]=4
console.log(arr2[6][2]) //4

//sum of array elements
let sum=0
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log('Sum of array elements: ',sum) //15

//Array methods
let arr3=[1,2,3,4,5]
console.log(arr3.length) //5

//push method
arr3.push(6)
console.log(arr3) //[1,2,3,4,5,6] add at end of array

//pop method
arr3.pop()
console.log(arr3) //[1,2,3,4,5] delete last element of array

//unshift method
arr3.unshift(0)
console.log(arr3) //[0,1,2,3,4,5] add at first of array

//shift method
arr3.shift()
console.log(arr3) //[1,2,3,4,5] delete first element of array

//splice method 
arr3.splice(2,2) // deletes 2 elements starting from index 2
console.log(arr3) //[1,2,5]

arr3.splice(1,0,3,4) // adds 3 and 4 at index 1
console.log(arr3) //[1,3,4,2,5] 

arr3.splice(2,1,6) // replaces 1 element at index 2 with 6
console.log(arr3) //[1,3,6,2,5]

arr3.splice(2,1,7,8) // replaces 1 element at index 2 with 7 and 8
console.log(arr3) //[1,3,7,8,2,5]

//slice (array.slice())
let arr4=arr3.slice(1,4) // returns a new array from index 1 to 3
console.log(arr4) //[3,7,8]
console.log(arr3) //[1,3,7,8,2,5] original array is not modified

//IndexOf (array.indexOf())
console.log(arr3.indexOf(7)) // at index 2
console.log(arr3.indexOf(10)) //-1 (not found)

//lastIndexOf (array.lastIndexOf())
console.log(arr3.lastIndexOf(2)) // at index 4
console.log(arr3.lastIndexOf(10)) //-1 (not found)

//includes (array.includes())
console.log(arr3.includes(3)) //true
console.log(arr3.includes(10)) //false

//sort (array.sort())
arr3.sort()
console.log(arr3) //[1,2,3,5,7,8] sorts the array in ascending order

//reverse (array.reverse())
arr3.reverse()
console.log(arr3) //[8,7,5,3,2,1] reverses the array

let numbers=[5,8,6,3,2,1,4,7]
numbers.sort((a,b)=>b-a) // sorts the array in descending order
console.log(numbers) //[8,7,6,5,4,3,2,1]

//forEach (array.forEach())
arr3.forEach((element,index)=>{
    console.log(`Element at index ${index} is ${element}`)
})

//map (array.map())
let newnumbers=numbers.map(function(item){
    return item * 2; 
})
console.log(newnumbers) //[10,16,12,6,4,2,8,14]

//filter (array.filter())
let evennumbers=numbers.filter(function(item){
    return item % 2 === 0; 
})
console.log(evennumbers) //[8,6,2,4]
let oddnumbers=numbers.filter(function(item){
    return item % 2 !== 0; 
})
console.log(oddnumbers) //[5,3,1,7]

//reduce (array.reduce())
let sumofnumbers=numbers.reduce(function(accumulator,currentValue){
    return accumulator + currentValue; 
},0)
console.log(sumofnumbers) //36
