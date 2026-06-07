const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

//const allheros=marvel_heros.concat(dc_heros);
//console.log(allheros);

const all_new_heros=[...marvel_heros,...dc_heros];
console.log(all_new_heros);

const new_array=[3,3,2,2[3,3[3,43]]];
const real_array=new_array.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("nikhil")); //identify it is array
console.log(Array.from("nikhil")); // convert it into a array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); //consvert variable into array



