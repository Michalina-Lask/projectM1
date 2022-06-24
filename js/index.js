var textColor = document.querySelector('.js-text-color')
//var color = document.querySelector(".form")
var body = document.querySelector("body")
body.style.color = "green"

textColor.addEventListener('keyup', function(event) {
body.style.color = event.target.value
});