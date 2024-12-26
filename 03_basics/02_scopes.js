let a = 300
if(true){
    let a = 10
    const b= 20 
    var c = 30
    
    //console.log(`Inner value of a:${a}`)
}

//console.log(a);
//console.log(b);
//console.log(c)

function one(){
    const username = "Raghav"
    function two(){
        const website = "Github"
        console.log(username);
    }
    //console.log(website);
    two();
}

//one()

/*
if(true){
    const username = "Raghav"
    if(username === "Raghav"){
        const website = "Github"
        console.log(`${username} ${website}`);
    }
    //console.log(website);   
}
//console.log(username);
*/



function addOne(num){
    return num+1
}

addOne(5)
addTwo(5)
const addTwo = function(num){
    return num+2
}



