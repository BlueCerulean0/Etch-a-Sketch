const container = document.getElementById('container');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const num = document.getElementById('num');

function createGrid(size='16', color='black') {

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    //container.style.width = '560px';

    const totalDiv = size * size;
    const divSize = 500 / size;
    
    for (i=0; i < totalDiv; i++) {

        const div = document.createElement('div');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        //div.style.border = '1px solid #ccc';
        div.style.boxSizing = 'border-box';


        div.addEventListener('mouseenter', () => {

            div.style.backgroundColor = color;
        })

        container.appendChild(div);

    }
}


start.onclick = function () {createGrid()}
reset.onclick = function resetGrid() {container.innerHTML = ''};