// console.log("R");
// console.log("A");
// console.log("G");
// console.log("H");
// console.log("A");
// console.log("V");

/*

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("G");
    console.log("H");
    console.log("A");
    console.log("V");    
}

//sayMyName()


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers("4","5")
// addTwoNumbers(3,null)
// addTwoNumbers(3,"a")

function addTwoNumbers(number1,number2){
    let result= number1+number2
    return result

    console.log("Raghav"); //unreachable code as it is after console statement
    //return number1+number2
}
const result = addTwoNumbers(3,5)
// console.log(`Result : ${result}`);
// console.log(typeof result)

function loginUserMessage(username = "Default"){  //default value
    //if you give value then it gets overridden
    if(username===undefined ){//!username
        console.log(`Username not defined`);
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Raghav"))
console.log(loginUserMessage())

*/

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,600,900))


const user = {
    username:"Raghav",
    ages:18
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user)


const myNewArray = [200,400,600,800,1000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
