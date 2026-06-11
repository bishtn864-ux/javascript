const user={
    username:"nikhil",
    price:999,
    welcomeMeassage:function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this);
    }
}

 user.welcomeMeassage();
// // user.username="sam";
// // user.welcomeMeassage();
// console.log(this);

// function chai(){
//     let username="nikhil";
//     console.log(this.username);
// }

// chai();

const chai=()=>{
    let username="nikhil";
    console.log(this.username);
    
}

const addtwo=(num1,num2)=>(num1 +num2)

console.log(addtwo(3,5))