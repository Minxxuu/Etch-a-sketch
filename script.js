let gridInput = 0;
const container = document.querySelector(".container")
const btn = document.getElementById("gridButton")

btn.addEventListener("click", () => {userInput = prompt("Enter a new grid size:"), setGridSize()});


function grid(){
    for(let i = 0; i < gridInput; i++)
    {
        const newSquare = document.createElement("div");
        newSquare.classList.add("Square")
        container.appendChild(newSquare)
        newSquare.addEventListener("mouseover", (event) => {event.target.style.backgroundColor = "red"})
    }
}

function setGridSize()
{
    gridInput = userInput;
    if(userInput > 100)
    {
        alert("Cannot exceed 100")
    }
    grid();
}

grid();
