//Random in JS - retorna um ponto flutuante entre 0 e 1, 0 incluso e 1 exclusivo
console.log(Math.random()); 
//Retorna um inteiro entre 0 e um numero definido por max
max = 30;
console.log(Math.floor(Math.random() * max));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Verificar se tem uma imagem em cada #grid
//const sectionElement = document.querySelector('section');
// Todos os 'h1' são filhos de sectionElement, portanto posso fazer:
//const headers = sectionElement.querySelector('h1');

// Exemplo: Jogo da velha
const boxes = document.querySelectorAll('#grid div')
for (const box of boxes){
    box.addEventListener('click',changeToX);
}
function changeToX(event){
    const container = event.currentTarget;//recupero a div correspondente que cliquei
    const image = document.createElement('img'); //criar elemento img
    image.src = 'x.png'; //imagem do x
    container.appendChild(image); //adicionar a imagem no container
    container.removeEventListener('click',changeToX);//pra nao deixar sobrepor, removo o event listener
    computerChoose0();//passo a vez
}
function computerChoose0(){
    const allBoxes = document.querySelectorAll('#grid div'); //procura todas divs que estao dentro de grid
    const freeBoxes = []; //lista 
    for (const box of allBoxes){ //iterar dentro de all boxes
        let imageChild = box.querySelector('img');//query de img pra ver se tem uma imagem filho
        if(!imageChild){//Se existir uma imagem ok, se não existir eu coloco uma imagem
            freeBoxes.push(box); //adiciono uma div (imagem)
        }
    }
const index = Math.floor(Math.random() * freeBoxes.length); //indice de 0 até o valor maximo que é freeBoxes -1
const freeSpace = freeBoxes[index]; //vou no freeBoxes no index aleatorio e pego o espaço livre
const image = document.createElement('img'); //crio uma imagem no meu documento
image.src = 'o.png'; //imagem do círculo
freeSpace.removeEventListener('click', changeToX); //tiro o event listener dele pra nao comseguir sobrepor
freeSpace.appendChild(image); //coloco a imagem que acabei de criar, da bolinha
}
////////////////////// ESTA BOM? AINDA NÃO! POIS ESTAMOS COMPARANDO VIEW COM MODEL - MANTER SEPARADO O ESTADO DO SISTEMA COM INTERFACE DE USUARIO



 