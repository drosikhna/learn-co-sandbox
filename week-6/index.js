function createAColorSpan() {
let ourSpan = document.createElement("span")

ourSpan.innerText = "red"
// <span>Red</span>

ourSpan.style.backgroundColor = "red"

const ourDiv = document.querySelector ("#colors")
ourDiv.appendChild(ourSpan)
}

createAColorSpan()
createAColorSpan()

if (color === "red"){
  ourSpan.style.width = "50%"
} else if (color === "blue") {
  ourSpan.style.width = "250px"
} else {
  ourSpan.style.width === "150px"
}

switch (color) {
  case "red": {
    ourSpan.style.width = "50%"
    break
  }
  default: {
    ourSpan.style.width = "150px"
  }
}
