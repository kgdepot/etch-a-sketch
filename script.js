const sketchContainer = document.querySelector('#sketchContainer');
let gridSize = 16; // 16 x 16 grid;

//game



for (let i = 0; i < gridSize; i++) {  //i = row
    const rowContainer = document.createElement('div');
    rowContainer.className = 'rowContainer';
    rowContainer.setAttribute('style', 'display: flex;');
    
    for (let j = 0; j < gridSize; j++) {   //j = column
        const div = document.createElement('div');
        div.className = 'gridDiv';
        div.addEventListener('mouseover', setColor);
        div.textContent = `${i},${j}`;
        div.style.backgroundColor = 'blue';
        
        div.setAttribute('style', 'width: 20px; height: 20px;');
        
        rowContainer.appendChild(div);
        //create div for each j => 16 div
    }
    
    //create row
    sketchContainer.appendChild(rowContainer);
}

function setColor() {
    // console.log(this);
    this.style.backgroundColor = "black";
}
function setYear() {
    document.getElementById("date").textContent = new Date().getFullYear();
}
setYear();