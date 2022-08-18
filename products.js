const ichaChairImage =["images/chair.png", "images/chair2.png", "images/chair3.jpg", "images/chair4.jpg"]
let chairCount = document.getElementById("change")

let green = document.getElementById("green")

let red = document.getElementById("red")

let yellow = document.getElementById("yellow")

let blue = document.getElementById("blue")


let defaultImageItem = `<img class="w-100" src = "${ichaChairImage.at(0)}">`

chairCount.innerHTML = defaultImageItem
let greenChair = `<img  class="w-100" src= "${ichaChairImage.at(0)}">`
let redChair = `<img class="w-100" src= "${ichaChairImage.at(1)}">`
let yellowChair = `<img class="w-100" src= "${ichaChairImage.at(2)}">`
let blueChair = `<img class="w-100" src= "${ichaChairImage.at(3)}">`

green.addEventListener("click", function () {
    chairCount.innerHTML = defaultImageItem
})

green.addEventListener("click", function () {
    chairCount.innerHTML = greenChair
})


red.addEventListener("click", function () {
    chairCount.innerHTML = redChair
})

yellow.addEventListener("click", function () {
    chairCount.innerHTML = yellowChair
})

blue.addEventListener("click", function () {
    chairCount.innerHTML = blueChair
})