//SWAPPING 2 VARIABLES

a =9
b=8 
let c
console.log(typeof(c))
console.log("original values " + a,b)
//using 3rd variable
temp = a
a=b
b=temp

console.log(a,b)

//without using 3rd variable
a=a+b // 9 + 8 = 17
b= a-b // 17- 8 = 9
a = a-b // 17 - 9 = 8

console.log(a, b)

const x = [1,2,3]

x.push(4)

console.log(x)