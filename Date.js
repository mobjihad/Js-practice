const datee = new Date();

// console.log(datee.toLocaleString());
// console.log(datee.toString());
// console.log(datee.toLocaleDateString());
// console.log(datee.toDateString());

const myCreatedTime = new Date(2025,0,  11);
console.log(myCreatedTime.getTime());

const timen = Math.floor(Date.now()/1000); 
console.log(timen);

console.log(myCreatedTime.getDay());
console.log(myCreatedTime.getMonth()+1);


