//singleton

const tinderUser=new Object()

tinderUser.id="12345";
tinderUser.name="nikhil";
tinderUser.isloggedin=false;

//console.log(tinderUser);

const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            lastname:"bisht",
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

const obj4={...obj1, ...obj2}
console.log(obj4);

const user=[
    {
        id:1,
        email:"bishtn493",

    },
    {

    },
    {

    }
]

user[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedin')); // tll about that object have this property

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"nikhil",
}

const{courseInstructor:instructor}=course;
console.log(instructor);