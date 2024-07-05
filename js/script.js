// Function
function createDivSquare() {
    let currentElement = document.createElement("div")
    currentElement.classList.add("square")
    return currentElement;
}

// elements recovery
const grid = document.getElementById("grid")
const btn = document.getElementById("play")

// click event on btn
btn.addEventListener("click", function() {
    let square;
    for (let k = 0; k < 100; k++) {
        square = createDivSquare();
    }
})
