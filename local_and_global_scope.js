
// Global scope
const name = "gaurav";
function greet(){
    console.log(name);

}
greet();
console.log(name);

//Local scope


function greet(){
    const name = "grv";
    console.log(name);

}
greet();
console.log(name);
