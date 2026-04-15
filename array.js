//Array//


const arr = [1,2,3,4,5]
const myarr = new Array([10,20, [30,40,50]])

console.log(arr);
console.log(arr[3]);

console.log(myarr);
console.log(myarr[0][2]);
console.log(myarr[0][1]);

//Array Methods//

//push Method

myarr.push(60)
console.log(myarr);


//pop Method

myarr.pop()
console.log(myarr);



// Unshift 
myarr.unshift(6)
console.log(myarr);


//give empty array

console.log(new Array());

console.log(myarr.indexOf(1));

//Slice And  Splice

const myn1 = arr.slice(1,3)
console.log(myn1);

const myn2 = arr.splice(1,3)
console.log(myn2);

const heros = ["shahrukh","salman","akshay",["kailesh","amir","ajay"]]
console.log(heros);
heros.push("kartik");
console.log(heros);
console.log(heros[3][1]);