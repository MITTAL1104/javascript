//generate a random hexcode 

const randomColor= function(){
    const hexx = "0123456789ABCDEF"
    let color = '#'

    for(let i =0;i<6;i++)
    {
        color +=hexx[Math.floor(Math.random()*16)];
    }

    return color;
}
let intervalId
const startChangingColor = function(){

    if(!intervalId){
        intervalId =  setInterval(changeBGColor,1000)
    }


    function changeBGColor(){
        document.body.style.backgroundColor=randomColor();
    }
    
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId=null;
}

document.querySelector('#start').addEventListener
('click',startChangingColor)

document.querySelector('#stop').addEventListener
('click',stopChangingColor)
