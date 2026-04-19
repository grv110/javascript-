
// Function 

function hello(){
    console.log("G")
    console.log("a")
    console.log("u")
    console.log("r")
    console.log("a")
    console.log("v")

}
 hello()

// function with parameter

function Add(number1,number2){
    console.log(number1+number2);

}
Add(1,2)


// function expression 


const newnum = function addTwonumber(number1, number2){
    console.log(number1+number2)

 }

 newnum(2,3);
 
// function with return declare new variable

function add (num1,num2){
    let result = num1 + num2
    return result

}
const result = add(3,5);
console.log("result",result)


// function with return

function add (num1,num2){
    return num1+num2

}
const res = add(8,2)
console.log("res",res);

//rest paramiter function 


function calculateprice(val1,val2, ...valn){
    return valn

}
console.log(calculateprice(100,200,300,400,500));


