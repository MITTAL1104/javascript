//const tinderuser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Raghav",
            lastname:"Mittal"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2};
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log((tinderUser.hasOwnProperty('isLogged')));


const course = {
    courseName: "Javascript",
    price:"999",
    courseInstructor: "Raghav"
}

//course.courseInstructor

const {courseInstructor:Instr} = course

console.log(Instr);

// {
//     "name":"Raghav",
//     "coursename":"Javascript",
//     "price":"free"
// }
