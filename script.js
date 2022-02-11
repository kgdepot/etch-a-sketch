console.log('adf');

const sketchContainer = document.querySelector('#sketchContainer');

let gridSize = 16; // 16 x 16 grid;

//i = row
for (let i = 0; i < gridSize; i++) {
    //j = column
    const rowContainer = document.createElement('div');
    rowContainer.className = 'rowContainer';
    rowContainer.setAttribute('style','display:flex;');
    
    for (let j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        div.textContent = `(${j})`;
        rowContainer.appendChild(div);
        //create div for each j => 16 div
    }
    //create row
    sketchContainer.appendChild(rowContainer);
}