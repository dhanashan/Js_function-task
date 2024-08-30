//question 1
const person = '[{"name" : "Bob","age" : 12,"loc":"kolkata"},{"name" : "alice","age" : 18,"loc":"karnataka"},{"name" : "devika","age" : 12,"loc":"mumbai"}]';

const obj = JSON.parse(person);
const person_map = obj.map(a => a.name);
console.log(person_map)
const person_filter = obj.filter(a => (a.age>15))
console.log(person_filter)
const person_foreach = obj.forEach(a => {
    console.log(a.loc)
})


//question 2
 const arr = [10, 20, 30, 40]
 const arr_red =  arr.reduce((acc, cur) => {
    acc = acc+cur;
    return acc;
 },0)
 console.log("sum of the array "+arr_red)

 //question 3
 const prod = [{name:"biscuits",price:30,quantity:"120 gram"},{name:"paste",price:100,quantity:"100 gram"},{name:"chips",price:10,quantity:"25 gram"}]

 prod_red = prod.reduce((acc,cur)=>{
    acc = acc+cur.price;
    return acc;
 },0)
 console.log("product total amount "+prod_red)

 //question 4
 let arr_1 = [5, 12, 8, 130, 44]
 let arr_1_filt = arr_1.filter(a => (a > 10))
 console.log("elements greater than 10 are "+arr_1_filt)

 //question 5
 let arrStr = ["apple","banana","cherry","date"]
 let arr_Str_filt = arrStr.filter(a => (a.includes('a')))
 console.log("the string which contains the letter a : "+arr_Str_filt)

 //question 6

 let aStr = ['red','green','blue']
 console.log("the array contains green : "+aStr.includes('green'))

 //question 7

 let arr_7 = [1, 3, 5, 7, 9]
 console.log("array contains 7 is "+arr_7.includes(7))

 //question 8

 let arr_num = [1, 2, 3, 4, 5]
 let num_map = arr_num.map(a => (a*2))
 console.log(num_map)
//question 9

let arrayStr = ['hello','world']
let arrUpper =  arrayStr.map( a => (a.toUpperCase()))
console.log(arrUpper)

 //question 10

 let arrFlat = [1, 2, [3, 4],[5,[6, 7]]]
 console.log(arrFlat.flat(Infinity))

 //question 11
 arr_Elements = ['a','b','c','d','e']
 console.log(arr_Elements.length)

 //question 12
 arr_slice = [1, 2, 3, 4, 5, 6, 7]
 arr_last = arr_slice.slice(-3)
 console.log(arr_last)

 //question 13
 let fruit = ['apple','banana','cherry']
 let fruitShift = fruit.shift()
 console.log(fruit)