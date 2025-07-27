const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');
const game = document.querySelector('.game-board');
const score = document.getElementById('score');

let pontos = 0; //Valor inicial da pontuação

const intervaloScore = setInterval(() =>{

    pontos+=10; //Aumenta na pontuação de 10 em 10
    score.textContent = `Score ${pontos}`; //Atualiza pontuação na tela

}, 100); //Atuliza pontuação a cada 0.1s

const jump = () =>{

    mario.classList.add('jump');

    setTimeout(() =>{ 

        mario.classList.remove('jump');

    }, 500);
}


const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft; //Deslocamento esquerdo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //Pega o estilo computado na imagem do mario (no caso pega o bottom), replace serve para apagar o px, + serve para converter parar Number

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        let som = new Audio('./img/sommorrendo.mp3');
        som.play();

        pipe.style.animation = 'none'; //Desliga animação
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; //Desliga animação
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/mariogameover.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        nuvem.style.animationPlayState = 'paused'; //Para a animação


        clearInterval(loop); //loop para de rodar
        clearInterval(intervaloScore) //Pontuação para de contar
    }

}, 10);

document.addEventListener('keydown', jump); //Ao clicar em qualquer tecla
document.addEventListener('touchstart', jump); //Ao clicar na tela

const bntReiniciar = document.getElementById('reset');

bntReiniciar.addEventListener('click', () =>{
    location.reload(); //Recarrega a página inteira
});