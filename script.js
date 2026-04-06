//setting an initial default grid to 16
let userInput = 16;

const container = document.querySelector(".container")
const btn = document.getElementById("gridButton")

btn.addEventListener("click", () => {userInput = prompt("Enter a new grid size:"), setGridSize()});

function grid(){
    for(let i = 0; i < userInput; i++)
    {
        const newSquare = document.createElement("div");
        newSquare.classList.add("Square")
        container.appendChild(newSquare)
        newSquare.addEventListener("mouseover", (event) => {event.target.style.backgroundColor = "red"})
    }
}

function setGridSize()
{
    if(userInput > 100)
    {
        alert("Cannot exceed 100")
    }
    //clears the grid before processing new one
    container.innerHTML = "";
    grid();
}

grid();
