const phoneImages = ["images/blue.jpg", "images/green.jpg", "images/midnight.jpg", "images/red.jpg"]

let phoneCont = document.getElementById("phoneShow")

let blue = document.getElementById("blue")

let green = document.getElementById("green")

let midNight = document.getElementById("midnight")

let red = document.getElementById("red")


let defaultImageItems = `<img src= "${phoneImages.at(0)}">`


phoneCont.innerHTML = defaultImageItems
let blueImgItems = `<img src= "${phoneImages.at(0)}">`
let greenImgItems = `<img src= "${phoneImages.at(1)}">`
let midNightImgItems = `<img src= "${phoneImages.at(2)}">`
let redImgItems = `<img src= "${phoneImages.at(3)}">`

blue.addEventListener("click", function () {
    phoneCont.innerHTML = defaultImageItems
})

blue.addEventListener("click", function () {
    phoneCont.innerHTML = blueImgItems
})


green.addEventListener("click", function () {
    phoneCont.innerHTML = greenImgItems
})

midNight.addEventListener("click", function () {
    phoneCont.innerHTML = midNightImgItems
})

red.addEventListener("click", function () {
    phoneCont.innerHTML = redImgItems
})