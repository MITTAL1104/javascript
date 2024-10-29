const user = {
    username:"Raghav",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);



//Normal function declaration
// function one(){
//     let username = "Raghav"
//     console.log(this.username);
// }


//Arrow function declaration
// const one = () => {
//     //let username = "Raghav"
//     console.log(this);
// }
// one()


const addTwo = (num1,num2) => {
    return num1+num2
}
const addTwo1 = (num1,num2) => num1+num2
const addTwo2 = (num1,num2) => (num1+num2)
const addTwo3 = (num1,num2) => ({username:"Raghav"})

console.log(addTwo3(3,4))