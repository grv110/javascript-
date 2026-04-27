
//this keyword

// const user ={
//     username : "gaurav",
//     price : 999,

//   welcomemessage : function() {
//     console.log(`${this.username} ,welcome to messages`);
//     console.log(this);

// }
// }
// user.welcomemessage();
// user.username ="sam"
// user.welcomemessage();
// user.username ="srv"
// user.price = 2000
// user.welcomemessage();
// console.log(this)


// arrow function 

const user2 = () => {
        let username = "grv"
        phoneno = 7079762373
        console.log(this.username)



}
user2()


//


const user3 = () => {
    let username = "grv"
    pnoneno = 7079762373
    console.log(username)
    console.log(phoneno)
}
user3()
///
/////////////////////////////

const addtwo = (num1,num2) =>{
    return num1+num2
}
console.log(addtwo(2,4))
//////////////////


const addthree = (num1,num2,num3) => (num1+num2+num3)
console.log(addthree(1,5,3))