
const addval = function(val1, val2){

    return val1+val2
}

// console.log(addval(3,4));

const rval = function (...num){

    return num;
}

const rrval = rval(500,1000,30000,100);

// console.log(rrval)



const rwm = function(num1,num2,num3, ...numu){

    console.log(num1)
    console.log(num2);
    console.log(num3);
    return numu;
}

// console.log(rwm(23,45,30,34,43,892,348));

const sf = function (num2 ,num1 =3){

    console.log(num1);
    console.log(num2);
}

// sf();

const ob1= {

    username: "MOB",
    call:"S21MOB",
    Dxpedition:true

}

const fro = function(obj){

    console.log(obj.username);
    console.log(obj.Dxpedition);
}

// fro(ob1);


const arr1 = ["MOB",2,3, "S21MOB"];
const fra = function (arr){

    console.log(arr[0]);
    console.log(arr[1]);
}

// fra(arr1)

const ob = {

    username: "MOB",
    age: 25,
    greetings: function(){

        console.log(`Hello, ${this.username}, wellcome`)
        console.log(this);
    }
}

// ob.greetings();
// ob.username = "RC"
// ob.greetings();
// console.log(this);

function hello(){
    let username = "MON"
    console.log(this);
}
// hello()

const hh = function f2(){

    console.log(this)

}

// hh();


const af1 = () => {
    let username = "Hola"
    console.log(this);
}

// af1();


// const addtwo = (num1, num2) => num1+num2 

const addtwo = (num1,num2) => ({username:"moob" , age:24});

// console.log(addtwo(12,12));

const h1 =function add(){
    console.log("DB Connected");
}();


const arr = ["MOB",2,3, "elllo"];


(function pr(){

    console.log("Function two"); 
})();

((data)=>{
    console.log(data)
})(arr);