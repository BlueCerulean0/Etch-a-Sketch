const container = document.getElementById('container');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const num = document.getElementById('num');
const input = document.getElementById('grid-size');
const gridValue1 = document.querySelector('.value1');
const gridValue2 = document.querySelector('.value2');
const colorPicker = document.getElementById('colorPicker')

let currentColor = '#000000';

function createGrid(size= '16', color= currentColor) {

    container.innerHTML = ''

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    //container.style.width = '';

    const totalDiv = size * size;
    const divSize = 500 / size;
    
    for (i=0; i < totalDiv; i++) {

        const div = document.createElement('div');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        //div.style.border = '1px solid';
        div.style.boxSizing = 'border-box';


        div.addEventListener('mouseenter', () => {

            div.style.backgroundColor = color;
        })

        container.appendChild(div);

    }
}

colorPicker.addEventListener('input', (e) => {

    currentColor = e.target.value
    createGrid(input.value, currentColor)
    //colorPicker.style.backgroundColor = currentColor
})

input.addEventListener('input', (e) => {
    const divSize = e.target.value;
    gridValue1.textContent = divSize;
    gridValue2.textContent = divSize;
    createGrid(divSize);
})

input.value = 16;
gridValue1.textContent = 16;
gridValue2.textContent = 16;
createGrid();

reset.onclick = function resetGrid() {
    container.innerHTML = ''
    currentColor = black
    input.value = 16 ;
    gridValue1.textContent = 16;
    gridValue2.textContent = 16;
    createGrid();
};