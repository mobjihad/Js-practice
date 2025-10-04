const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Async work done")
        resolve()
    }, 1000);
})

promise1.then(() => {
    console.log("Promise consumed")
})

new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("2nd Async work done")
        resolve()
    }, 1000)

}).then(() => {
    console.log("2nd promise consumed")
})

const promiseThree = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({ username: 'mob', call: 's21mob' })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {
        const error = false
        if (!error) {

            resolve({ username: "Seyam", Call: "S21HMX" })
        } else {

            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {

    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Finally Promise is resolved or rejected")
})


const promiseFive = new Promise((resolve, reject) => {

    setTimeout(() => {

        const error =false
        if (!error) {
            resolve({ Username: "Javascript", Pass: "124" })
        } else {
            reject("JsError: Something Went Wrong")
        }

    }, 1000)
})


async function consumePromiseFive() {

    try {
        const response = await promiseFive;
        console.log(response)
    } catch(error) {

        console.log(error)
    }


}

consumePromiseFive();


async function fetchAllUser(){

     try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
     }catch(error){
        console.log(error)
     }
   

} 

// fetchAllUser()

fetch('https://api.github.com/users/mobjihad')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})