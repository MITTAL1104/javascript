const myNums = [1,2,3,4,5]

/*
const myTotal = myNums.reduce (function(acc,currval ) {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0)
*/

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

//console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python course",
        price:999
    },
    {
        itemName: "app dev course",
        price:5999
    },
    {
        itemName: "data sci course",
        price:12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay)