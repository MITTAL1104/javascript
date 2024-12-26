//singleton
//Object.create

//object literals


const mySymb = Symbol("key1")
const mySymb1 = Symbol("key2")


const JsUser = {
    name:"Raghav",
    "full name":"Raghav Mittal",
    [mySymb]:"key1111",
    age:18,
    lcoation:"Patiala",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Tuesday"]
}

//Accesing object values
// console.log(JsUser.lastLoginDays)
// console.log(JsUser.email);
// console.log(JsUser[mySymb]);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);


//Value changes

JsUser.email = "def@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "ghi@gmail.com"

//console.log(JsUser);

//function 

JsUser.greeting = function(){
    console.log("Good Morning");
}
JsUser.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

