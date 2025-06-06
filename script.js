const  html   = document.querySelector('html');
const focoBt  = document.querySelector(' .app__card-button--foco');//pega a classe app__card-button--foco
const curtoBt = document.querySelector('.app__card-button--curto');//pega a classe app__card-button--curto
const longoBt = document.querySelector('.app__card-button--longo'); //pega a classe app__card-button--longo
const banner  = document.querySelector('.another-image') ; //pega a classe another-image
const titulo  = document.querySelector('.app__title'); //pega o titulo da página que tem a classe app__title
const botoes  = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause span')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const trocarImage = document.querySelector('#start-pause img')
const tempoNaTela = document.querySelector('#timer')


const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio ('/sons/luna-rise-part-one.mp3');
const beepSound = new Audio("sons/beep.mp3");
const playSound = new Audio("sons/play.wav");
const pauseSound = new Audio("sons/pause.mp3");

let intervaloId = null
let tempoDecorridoEmSegundos =  1500 
musica.loop = true


musicaFocoInput.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})


  focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active')
}) 

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
  alterarContexto('descanso-curto')
  curtoBt.classList.add('active')
})
longoBt.addEventListener('click', () =>{
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
}) 

function alterarContexto (contexto){
    mostrarTempo()
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')//
    }
    )
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `  Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            
            break;
        case "descanso-curto":
            titulo.innerHTML = ` Que tal da uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`


             break;
         case "descanso-longo":
                titulo.innerHTML = `Hora de voltar a superfície,<br>
                        <strong class="app__title-strong">Faça uma pausa longa.</strong>`
         
               default:
               break;
    }
}
const contagemRegressiva = () => {

    if (tempoDecorridoEmSegundos <= 0) {
        zerar ()

       alert('Tempo finalizado!')
       return }
    
    tempoDecorridoEmSegundos -= 1
    mostrarTempo() //oi
   


};

startPauseBt.addEventListener('click', iniciarOuPausar) 
function iniciarOuPausar (){
    
    if(intervaloId ){
       
        pauseSound.play(); // Toca o som de pausa
        zerar()
        return

    }
        
    intervaloId = setInterval(contagemRegressiva, 1000)
    playSound.play(); // Toca o som de início
    iniciarOuPausarBt.textContent = 'Pausar'
    trocarImage.src = '../imagens/pause.png';

    
       
}

    




function zerar (){
    clearInterval (intervaloId)
    iniciarOuPausarBt.textContent = 'Começar'
    trocarImage.src = '../imagens/play_arrow.png';

    intervaloId = null
  beepSound.play(); // Toca o som quando chegar a zero
}

function  mostrarTempo (){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado
    }`
}

mostrarTempo()