const mario=document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let btn1= document.querySelector('#clickbtn');





const jump = () => {
    mario.classList.add('jump');
    setTimeout(() =>{
        mario.classList.remove('jump')
    } ,500)
}
btn1.addEventListener("click",jump)
const loop = setInterval(()=>{
    const pipeposition= pipe.offsetLeft;
    const marioposition= +window.getComputedStyle(mario).bottom.replace("px","");
    if (pipeposition <= 120 && pipeposition >0 && marioposition < 100){

        pipe.style.animation= 'none';
        pipe.style.left=`${pipeposition}px`;
        mario.style.animation= 'none';
        mario.style.bottom=`${marioposition}px`;
        mario.src="./imagens/game-over.png"
        mario.style.width="75px"
        mario.style.marginLeft="55px"
    clearInterval(loop)
    }
},6);
document.addEventListener('keydown', jump);