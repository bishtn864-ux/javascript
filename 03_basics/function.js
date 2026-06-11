function saymyname (){
    console.log("h");
    console.log("i");
    console.log("t");
}

saymyname();

function addTwonumber(number1,number2){
    let result=number1+number2;
}
//console.log(result);

function calculateCartprice(...num1){
      return num1;
}

console.log(calculateCartprice(200,400,300))

const user={
    username:"hitesh",
    price:199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleobject(user);


const myNewArray=[200,400,788,990];

function returnSecondvalue(getArray){
    return getArray[1];

}

console.log(returnSecondvalue(myNewArray));


