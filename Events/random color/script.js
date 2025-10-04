const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const bd = document.querySelector('body')
let intervalId
start.addEventListener('click', startg);

stop.addEventListener('click', stopg);


function startg() {
    if (intervalId === null) {
        intervalId = setInterval(changeBG, 1000)
    }
}


function stopg() {
    clearInterval(intervalId)
    intervalId = null
}


const randomcolor = () => {
    const hexnum = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let rn = Math.floor(Math.random() * 15 + 1);

        color += hexnum[rn];
    }
    console.log(color)
    return color;

};

function changeBG() {

    bd.style.backgroundColor = randomcolor();




}



