const arr1= ["Hello","MOB","RC","HMX"];
const numarr = [1,2,3,4,5,6,7,8]
const ob = {

    name:"MOB",
    call:"S21MOB",
    Dx:true
}

const str = "HEllo MOB This is , Wassup";

const product = [

    {
        name:"Earphone",
        price:3455
    },
    {
        name:"hone",
        price:500
    },
    {
        name:"Charger",
        price:340
    },
    {
        name:"Dock",
        price:5500
    },
    {
        name:"SSD",
        price:3550
    },
]

const arrwObj = [

    {

        name:"Seyam",
        call:"S21HMX",
        iota:false,
        Dxpedition: 2,

    },
      {

        name:"Babu",
        call:"S21RED",
        iota:true,
        Dxpedition: 2,

    },
      {

        name:"Tayra",
        call:"S21ETE",
        iota:false,
        Dxpedition: 0,

    },
]

const map = new Map();

map.set("Dhalchar","As-140");
map.set("Char Patila","As-140");
map.set("kutubdia","As-123");


for(const index of arr1){

    // console.log(index);
    // console.log("------");
    // console.log(index);
}

for (const index of str){

    // console.log(index);
}

for (const index in ob){

     // console.log(`Index : ${index} and Value: ${ob[index]}`);

     
    }
for(const inx in arr1){
  //  console.log(arr1[inx]);
}    

for (const [index,key] of map){

    // console.log(index);
    // console.log(key);
  
}


// arr1.forEach((item,index,ar)=>{

//     console.log(item,index,ar)
// })

function printMe(item,index,ar){
    console.log(item,index,ar)
}

 //arr1.forEach(printMe);

arrwObj.forEach((index, item , val)=>{

    // console.log(` ${index.Dxpedition}-- ${index.name} -- ${index.call}--- ${index.iota} `)
    // console.log(item,"--", val   )
});


const fil = product.filter((item)=>{

  return  item.price>=300 && item.price<=2000
})

console.log(fil);

const mp = product.map((item)=>{

    // return item.price+100000
//    return item.price>=300 
})
// console.log(mp);


const total = numarr.reduce((acc,item)=>{
    
    // console.log(`Acc: ${acc} -- val : ${item}`)
    return acc+item
},10)

// console.log(total);

const ptotal = product.reduce((acc,item)=>{
    console.log(`Acc: ${acc} -- val : ${item.price}`)
    return acc+item.price
},0)

console.log(ptotal)