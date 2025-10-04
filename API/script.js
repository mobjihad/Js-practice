const button = document.querySelector('#load')
const img = document.querySelector('.img')
const name = document.querySelector('.name')
const follower = document.querySelector('.follower')



function loadData() {

    const xhr = new XMLHttpRequest();
    const requestUrl = 'https://api.github.com/users/mobjihad'
    xhr.open('GET', requestUrl);


    xhr.onreadystatechange = function () {

        console.log(xhr.readyState)
        if (xhr.readyState === 4) {
          const  data = JSON.parse(this.response)
            fillData(data)
        }
    }
    xhr.send()
     console.log(" load executed")

}

function injectDataToWebPage(n,im,fol){

    img.innerHTML = `<img src=${im}>`
    name.innerHTML= `Name: ${n} `
    follower.innerHTML = `Follower: ${fol}`
}

function fillData(data){

    let name = data.name
    let img = data.avatar_url
    let follower = data.followers

    injectDataToWebPage(name,img,follower)

    
}

button.addEventListener('click', () => {
    console.log("clicked")
    
    loadData();
    console.log("After load")
    
     

})