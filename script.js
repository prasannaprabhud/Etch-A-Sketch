
const container = document.querySelector('.container');
const customizeBtn = document.querySelector('#btn1');
const createBtn = document.querySelector('#btn2');
const reset = document.querySelector('#reset');

customizeBtn.addEventListener('click', customizeGrid);
createBtn.addEventListener('click', createGrids);
reset.addEventListener('click', resetBtn);

function customizeGrid(){
    const grid = +prompt('Enter Grid value 1 to 100 : ', 16 );
    console.log(grid);
    if(grid > 0 && grid < 100){
        container.replaceChildren();
        return generateSquares(grid);
    } else{
        alert(`Received Invalid Input ${grid}`);
    }
}

function createGrids(){
    const grid = +prompt('Enter Grid value 1 to 100 : ', 16 );
    console.log(grid);
    if(grid > 0 && grid < 100){
        return generateSquares(grid);
    } else{
        alert(`Received Invalid Input ${grid}`);
    }
}

function resetBtn(){
    container.replaceChildren();
    generateSquares(20);
}

function generateSquares(squareCount){
    for(let i = 0; i < squareCount ** 2; i++){
        let temp2 = document.createElement('div');
        temp2.style.cssText =  ` 
            height: ${100 / squareCount}%; 
            aspect-ratio: 1; 
            border: 0.1px solid lightslategray; 
            box-sizing: border-box; `;
        container.appendChild(temp2);
        temp2.addEventListener('mousemove',() => temp2.style.background = 'lightslategray');
    }
}

generateSquares(20);