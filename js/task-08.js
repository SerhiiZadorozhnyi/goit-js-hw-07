const input = document.querySelector('input');
const createElemBtn = document.querySelector('[data-action="render"]');
const deleteElemBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

createElemBtn.addEventListener('click', createBoxes);

function createBoxes() {
    const size = 30;
    
    // for (const 123 of 1234) {

    // }

    for (let i = 0; i < input.value; i += 1) {   
    const max = 256;
    let red = Math.floor(Math.random() * max);
    let green = Math.floor(Math.random() * max);
        let blue = Math.floor(Math.random() * max);
        
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size+i*10}px`;
        box.style.height = `${size+i*10}px`;
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        box.style.marginRight = "10px";
        box.style.marginTop = "10px";
        boxes.append(box);
    }
}

deleteElemBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    boxes.innerHTML = '';
    input.value = '';
}
