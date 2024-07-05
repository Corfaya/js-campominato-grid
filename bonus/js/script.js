// Function
function createDivSquare(diff) { //NEW: added parameter
    let currentElement = document.createElement("div")
    currentElement.classList.add("square")
    currentElement.classList.add(diff) //NEW: parameter as second class
    return currentElement;
}

// elements recovery
const grid = document.getElementById("grid")
const btn = document.getElementById("play")
const level = document.getElementById("level") //NEW: select's recovery


// click event on btn
btn.addEventListener("click", function() {
    grid.innerHTML = ""
    let square;

    //NEW variables
    let levelSelection = level.value //value of the level selected
    let squareLength; //tot length of square
    let squareClass; //class to add
    if (levelSelection == 1) {
        squareLength = 100
        squareClass = "easy-squares"
    } else if (levelSelection == 2) {
        squareLength = 81
        squareClass = "medium-squares"
    } else if (levelSelection == 3) {
        squareLength = 49
        squareClass = "hard-squares"
    }


    for (let k = 0; k < 100; k++) { //to replace end loop condition with squares length
        square = createDivSquare(); //parameter: class value???? to be tested
        square.addEventListener("click", function() {
            this.classList.add("clicked-azure")
            console.log("Hai clickato su " + (k + 1))
        })
        square.innerText = k + 1
        grid.append(square)
    }
})
