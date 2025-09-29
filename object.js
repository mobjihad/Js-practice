
const Lcode = Symbol("HchjhdY7CHd&U")
const JsUser = {

    name: "MOB",
    "Call Sign": "S21MOB",
    Age: 25,
    DXpedition: true , 
    email: "s21mob.jihad@gmail.com",
    Location: ["Dhal CHar","Char Patila"],
    [Lcode]: "MyKey"


}; 

// console.log(JsUser.name);
// console.log(JsUser["Call Sign"]);


// JsUser.email = "S21mob@mobjihad.com";
// console.log(JsUser.email);
// // Object.freeze(JsUser);
// JsUser.greeting = function (){

//     console.log("Hello World");
// };

// JsUser.greetings = function (){

//     console.log(`Hello ${this["Call Sign"]}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetings())

const UserTwo = {};

UserTwo.Name= "Fazly Rabby";
UserTwo["Call SIgn"] = "S21RC";
UserTwo.email = "Rabby@s21rc.net"; 
// console.log(JsUser);
// console.log(UserTwo);

const margedArr = {...JsUser , ...UserTwo};
const ass = Object.assign({}, JsUser, UserTwo);
// console.log(margedArr);
// console.log(ass);


// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(JsUser.hasOwnProperty('DXpedition'));


const {"Call Sign": call, DXpedition: DX } = JsUser ; 

console.log(call);
console.log(DX);