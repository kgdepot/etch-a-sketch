const sketchContainer = document.querySelector('#sketchContainer');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const newSketch = document.querySelector('#newSketch');
const psyStylus = document.querySelector('#psyStylus');

let gridSize = 16;
// let gridSize = promptGridSize();
setGrid(gridSize);

eraser.addEventListener('click',()=>{


    // console.log('eraser clicked');
});
clear.addEventListener('click',()=>{
    const gridSquares = document.querySelectorAll(".gridDiv");
    gridSquares.forEach(div => div.style.backgroundColor = 'white');
});
newSketch.addEventListener('click',()=>{
    console.log('new SKetch clicked');
});
psyStylus.addEventListener('click',()=>{
    console.log('psyStylus clicked');
});



function setGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {    //i = row
        const rowContainer = setRow();
        for (let j = 0; j < gridSize; j++) {   //j = column
            const div = document.createElement('div');
            setRowSquare(div);
            rowContainer.appendChild(div);
        }
        sketchContainer.appendChild(rowContainer);
    }
}
function setRowSquare(div) {
    div.className = 'gridDiv';
    div.style.width = `${sketchContainer.clientWidth / gridSize}px`;
    div.style.height = `${sketchContainer.clientHeight / gridSize}px`;
    
    div.addEventListener("mouseover", setColor);
    
}
function promptGridSize() {
    let gridSize = 16;
    do {
        gridSize = prompt('Pen size (1 - 100) : ', 16); // 16 x 16 grid;
    } while (isNaN(gridSize) || gridSize > 100 || gridSize == '')
    return gridSize;
}
function setRow() {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'rowContainer';
    rowContainer.setAttribute('style', 'display: flex;');
    return rowContainer;
}
function setColor() {
    this.style.background = "lightblue";
}
function setYear() {
    document.querySelector(".date").textContent = new Date().getFullYear();
}
setYear();

