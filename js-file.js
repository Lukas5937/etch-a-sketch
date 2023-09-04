const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hover");})
}
