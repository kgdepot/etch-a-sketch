const sketchContainer = document.querySelector('#sketchContainer');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const newSketch = document.querySelector('#newSketch');
const psyStylus = document.querySelector('#psyStylus');
const stylus = document.querySelector('#stylus');
let gridSize = 0;
let gridSquares = document.createElement('div');

gridSize = promptGridSize();
if (gridSize) {
    setGrid(gridSize);
    gridSquares = document.querySelectorAll(".gridDiv");
    stylusColor('black');
}
setButtonEvents();

function setButtonEvents() {
    stylus.addEventListener('click', () => {
        stylusColor('black');
    });
    eraser.addEventListener('click',() => {
        stylusColor('white');
    });
    clear.addEventListener('click',()=>{
        if (gridSize) {
            gridSquares.forEach(div => div.style.backgroundColor = 'white');
        }
    });
    newSketch.addEventListener('click', () =>{
        const tempGridSize = promptGridSize(); 
        if (tempGridSize) {
            removeAllChildNodes(sketchContainer);
            gridSize = tempGridSize;
            setGrid(gridSize);
            gridSquares = document.querySelectorAll(".gridDiv");
            stylusColor('black');
        } 
    });
    psyStylus.addEventListener('click',()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        sketchContainer.addEventListener('mouseover', (e) => e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16) );
    });
}
function stylusColor(color) {
    sketchContainer.addEventListener('mouseover', (e) => e.target.style.backgroundColor = color);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function setGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {    //i = row
        const row = setRow();
        for (let j = 0; j < gridSize; j++) {   //j = column
            const div = document.createElement('div');
            setRowSquare(div);
            row.appendChild(div);
        }
        sketchContainer.appendChild(row);
    }
}
function setRowSquare(div) {
    div.className = 'gridDiv';
    div.style.width = `${sketchContainer.clientWidth / gridSize}px`;
    div.style.height = `${sketchContainer.clientHeight / gridSize}px`;
}
function promptGridSize() {
    let gridSize = 16;
    do {
        gridSize = prompt('Grid size (1 - 100) : ', 16); // 16 x 16 grid;
    } while (isNaN(gridSize) || gridSize > 100 || gridSize == '')
    return gridSize;
}
function setRow() {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'rowContainer';
    rowContainer.setAttribute('style', 'display: flex;');
    return rowContainer;
}
function setYear() {
    document.querySelector(".date").textContent = new Date().getFullYear();
}
setYear();

