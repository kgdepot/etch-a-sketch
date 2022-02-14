const sketchContainer = document.querySelector('#sketchContainer');

let gridSize = 16; // 16 x 16 grid;

//game
for (let i = 0; i < gridSize; i++) {    //i = row
    const rowContainer = getDomRow();
    for (let j = 0; j < gridSize; j++) {   //j = column
        const div = document.createElement('div');
        setRowSquare(div);
        rowContainer.appendChild(div);
    }
    sketchContainer.appendChild(rowContainer);

}

function setRowSquare(div) {
    div.className = 'gridDiv';
    div.addEventListener('mouseover', setColor);
    div.style.backgroundColor = 'blue';

    // console.log(sketchContainer.clientWidth); 

    div.style.width = `${sketchContainer.clientWidth / gridSize}px`;
    div.style.height = `${sketchContainer.clientHeight / gridSize}px`;
}

function getDomRow() {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'rowContainer';
    rowContainer.setAttribute('style', 'display: flex;');
    return rowContainer;
}

function setColor() {
    // console.log(this);
    this.style.backgroundColor = "lightblue";
}
function setYear() {
    document.querySelector(".date").textContent = new Date().getFullYear();
}
setYear();

