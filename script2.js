//Tentativa 2 - Variavel Global
const freeBoxes = [];
const boxes = document.querySelectorAll('#grid div');
for (const box of boxes){
    box.addEventListener('click', changeToX);
    freeBoxes.push(box);
}
function changeToX(event){
    const container = event.currentTarget;
    const image = document.createElement('img'); 
    image.src = 'x.png';
    container.appendChild(image);
    container.removeEventListener('click',changeToX);

    //Also remove container from freeBoxes
    const indexToRemove = freeBoxes.indexOf(container);//verifico qual indice do container que tenho que remover
    freeBoxes.splice(indexToRemove,1);//metodo splice

    computerChoose0();
}

function computerChoose0(){
    const index = Math.floor(Math.random() * freeBoxes.length); 
    const freeSpace = freeBoxes[index];

    //Remove the chosen box from freeBoxes
    freeBoxes.splice(index,1);

    const image = document.createElement('img');
    image.src = 'o.png'; 
    freeSpace.removeEventListener('click', changeToX); 
    freeSpace.appendChild(image); 
}

// TA MELHOR MAS AINDA NAO TA BOM, AINDA ESTAMOS USANDO UI EM freeBoxes
// Variavel global deve ser evitado, precisamos de classes
//////////////////////////////////////////////////////////////////////
// Declarar um ganhador:
// Temos que distinguir uma caixinha da outra, como?
// Ideia 1: um id para cada div - 9 event handlers
function displayWinner(){
    const winner = getWinner();// funcao que vai verificar se temos 3 'x's ou 3 'o's em sequencia
    
}