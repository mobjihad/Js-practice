const Arr = [1,2,3,4,5];
// const arr2 = ["Shaktiman", "Hola", "Deja"];

// const arr3 = new Array(1,3,4,5,6,7);

// console.log(arr2[0]);

// Arr.push(5);
// Arr.push(10);
// // Arr.pop(3);
// console.log(Arr);

// const newarr = arr3.join()
// console.log(newarr);
// console.log(typeof newarr);

// const Arr1 = [1,2,3,4,5];

// const arrslice = Arr1.slice(1,4);
// console.log(arrslice);
// console.log(`Main Array ; ${Arr1} `);

// const arrsplice = Arr1.splice(1,4);
// console.log(arrsplice);
// console.log(`Main Array ${Arr1}`);

const Heros = ["Superman", "Batman","Ironman","WonderWomen", "Cat Girl"];
const Names = ["mob","Red","RC","FIA"];
// const newarr = Heros.concat(Names)
// const newarr2 = [...Heros , ...Names, ...Arr] ;  
// console.log(newarr2);
const test = [1,2,3,4,[1,2,3,4,4,[1,2,3,4,54,[1,2,34,[1,2,3,4]]]],[1,2,3,[4,45]]];

Heros.push(Names);
Heros.push(Arr);
Heros.push(test);
// console.log(Heros);

const anotherArray = Heros.flat(Infinity);
// console.log(anotherArray)


console.log(Array.isArray("MOB"));
console.log(Array.from("MOB"));
console.log(Array.from({name:"MOOB"}))

const one= 100;
const two= 200;
const three= 300;

const newArFM = Array.of(one,two,three)
console.log(newArFM);