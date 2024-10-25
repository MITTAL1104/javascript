//Everything defined with beginning reference to be January 1,1970

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// //let myCreatedDate1 = new Date(2023,0,23,5,3);
// let myCreatedDate2 = new Date("2023-01-14");
// console.log(myCreatedDate.toDateString());
// //console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());


let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);

const newDate = new Date();

newDate.toLocaleString('default',{
    weekday:"long"
})


