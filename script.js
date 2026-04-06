let gridInput = 16;
const container = document.querySelector(".container")

function grid(){
    for(let i = 0; i < gridInput; i++)
    {
        const newSquare = document.createElement("div");
        container.appendChild(newSquare)
    }
}
grid();