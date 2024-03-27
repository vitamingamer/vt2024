const ball = document.querySelector("#ball")
const troll = document.querySelector("#troll")

ball.addEventListener('click', changeColor)
troll.addEventListener('click', vanish)

function changeColor() {
    ball.classList.toggle("active");
}   
function vanish() {
    troll.classList.toggle("active")
}
