let buttonDiv = document.getElementById("button1")
let buttonBack = document.getElementById("button2")
let buttonColor = document.getElementById("button3")
let divDisplay = document.querySelector(".resume")
let text = document.getElementById("h2")
let text1 = document.getElementById("h21")
let text2 = document.getElementById("h22")
let bodyBack = document.querySelector("body")

function ShowDiv() {
    divDisplay.style.display = "block"
}
buttonDiv.addEventListener("click", ShowDiv)

function ChangeBack() {
    divDisplay.style.background = "linear-gradient(0deg, rgba(15,32,39,1) 10%, rgba(32,58,67,1) 43%, rgba(44,83,100,1) 98%)"
    bodyBack.style.background = "rgb(12,23,28)"
}
buttonBack.addEventListener("click", ChangeBack)

function Color() {
    text.style.color = "white"
    text1.style.color = "white"
    text2.style.color = "white"
}
buttonColor.addEventListener("click", Color)