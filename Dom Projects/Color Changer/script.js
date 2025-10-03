const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
// console.log(buttons);

buttons.forEach((e) => {
  e.addEventListener('click', (value) => {
    console.log(value.target)
  if(value.target.id==="grey"){
    body.style.backgroundColor= value.target.id
    console.log(value.target.id)
  }
  if(value.target.id==="white"){
    body.style.backgroundColor= value.target.id
    console.log(value.target.id)
  }
  if(value.target.id==="blue"){
    body.style.backgroundColor= value.target.id
    console.log(value.target.id)
  }
  if(value.target.id==="yellow"){
    body.style.backgroundColor= value.target.id
    console.log(value.target.id)
  }
  });
});
