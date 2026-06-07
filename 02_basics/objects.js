// singleton

//object litrals

const mysum=Symbol("key1")

const jsUser={
    name:"nikhil",
    "full name":"nikhil singh bisht",//used via another method
    mysym:"mykey1",
    age:18,
    location:"jaipur",
    lastloginday:["monday","saturday"]
}

console.log(jsUser.name); // one way
console.log(jsUser["email"]);  //another method (best way to access)


jsUser.email="nikhildhhdh";
//Object.freeze(JsUser); //do not change the value

jsUser.greeting=function(){
    console.log("heelo");
}

jsUser.greetingtwo=function(){
    console.log(`hello js user ,${this.name}`);
}
console.log(jsUser.greetingtwo());

console.log(jsUser.greeting());