const container = document.querySelector(".container");
const size = document.querySelector(".size");
let sizeFactor = 16;
let cellSize = (960 / sizeFactor) +"px";
let cellAmount = sizeFactor ** 2;

function createGrid () {
    for (let i = 1; i <= cellAmount; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("id", i);
        cell.style.height = cellSize;
        cell.style.width = cellSize;
        container.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            cell.classList.add("hover");});
    };
}

function removeGrid () {
    for (let i = 1; i <= cellAmount; i++) {
        cell = document.getElementById(i);
        container.removeChild(cell);
    };
};

let changeSize = () => {
    sizeFactor = prompt("How many squares per site do you want?");
    cellSize = (960 / sizeFactor) +"px";
    removeGrid();
    cellAmount = sizeFactor ** 2;
    createGrid();
};

size.addEventListener("click", changeSize);

createGrid();

