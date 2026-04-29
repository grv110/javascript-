// map 

const nums = [1,2,3,4,5,6,7];
const double = nums.map(n=>n*2);
console.log(double);


 

// filter 
const nums2 = [1,2,3,4,5,6];
const even = nums2.filter(n=>n%2===0);
console.log(even);


// reduce 

const nums3 = [1,2,3,4,5];
const sum = nums3.reduce((acc,n)=>acc+n,0);
console.log(sum);
