const name ="hitesh";
const repocount=50;

console.log(name+repocount+"hai");
console.log(`hello my name is ${name} and my repo is ${repocount}`); //this is string interpulation

//another way to initialize string:
const GameName= new String('nikhilSinghBisht');
 

//method:
console.log(GameName);
console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt('2'));
console.log(GameName.indexOf('g'));

const newStringone="  hites  ";
console.log(newStringone.trim());

const newString=GameName.substring(2,7);
console.log(newString);

const anotherString=GameName.slice(-9,-6);
console.log(anotherString);

const url="https://nikhilsigh%20.com";
console.log(url.replace('%20','-'));

console.log(url.includes('include'));

   


//spitting value into array

const method="hcid-dgeb-ghjde";
console.log(method.split('-'));
