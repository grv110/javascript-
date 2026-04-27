
// Global scope


const name = "gaurav";
function greet(){
    // console.log(name);

}
greet();
// console.log(name);

//Local scope


function greet(){
    const name = "grv";
    // console.log(name);

}
greet();
// console.log(name);

//

function one(){
    const name1 = "gaurav";

    function two(){
        const name2 = "saurav";
        console.log("name1",name1)
        console.log("name2",name2)
    }
    two()

     
    // console.log("name1",name1);
} 
one()
