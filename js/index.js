
var input = document.querySelector('title')
var nameElem = document.querySelector('.text')
var color = document.querySelector(".form")
var body = document.querySelector("body")

color.addEventListener('keyup',function(event){
body.style.backgroundColor= event.target.value
})

function callback(event) {
  nameElem.innerText = event.target.value
}
input.addEventListener('keyup', callback)