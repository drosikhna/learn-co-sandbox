function createAColorSpan() {
let ourSpan = document.createElement("span")

ourSpan.innerText = "red"
// <span>Red</span>

ourSpan.style.backgroundColor = "red"

const ourDiv = document.querySelector ("#colors")
ourDiv.appendChild(ourSpan)
}
