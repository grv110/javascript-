
const mysbl = Symbol("key1");

const user1 = {
    name : "gaurav",
    [mysbl] : "key2",
    age : 24,
    location : "delhi",
    id : "gau__raw__",
    lastlogin :"monday"

}

// how to access the object value 

// 1 Dot notation 
console.log(user1.name);

// 2 Bracket Notation
console.log(user1["age"]);


// add and update value

user1.name = "saurav";
user1.age = 19
user1.newcity = "noida";

console.log(user1);
console.log(user1[mysbl]);

user1.greeting = function(){
    console.log("hello js users");
}

user1.greetingtwo = function(){
    console.log(`hello js users ${this.name}`);
}
console.log(user1.greeting());
console.log(user1.greetingtwo());

// singlton object 

const users = {}
users.name = "gaurav"
console.log(users);


// access key and value 

const user2 = {
    email : "gaurav@gmail.com",
    aim : "ai engineer",
    fullname: {
        firstname :{
            firstname : "gaurav",
            lastname  : "kumar"
            

        }

    }
}
console.log(user2.fullname.firstname.lastname);

console.log(Object.values(user2));
console.log(Object.keys(user2));

// object de-structuring 
const course = {
    name : "javascript",
    price : 999,
    courseinstructor : "shresth"
}
// console.log(course.courseinstructor);

const {courseinstructor}= course
const {courseinstructor:instructor} = course
console.log(courseinstructor)
console.log(instructor);