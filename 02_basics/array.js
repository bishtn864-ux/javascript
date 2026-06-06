//array

const myArr=[0,1,2,3,4,true,'hitesh']; // contain diffrent datatype in one array
// it is resizable
/*
const myArr2=new Array(1,2,4,56);
console.log(myArr2[2]);

myArr2.push(6);
console.log(myArr2);

myArr2.pop()
myArr2.unshift(9); //addd 9 in front
myArr2.shift();// remove element from front
console.log(myArr.includes(9));
const arr=myArr2.join();//change all the value into string




console.log(myArr2);
*/

//slice,splice

console.log("A",myArr);
const myn1=myArr.slice(1,3); // print the value of index 1 and 2 
console.log(myn1);

console.log("B",myArr);
const myn2=myArr.splice(1,3); // print the value of index 1 ,2,3 and change the original rray
console.log(myn2);
console.log(myArr);
//splice take the value which is given from the original array and leftout ll the elements in the originl array
