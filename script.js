const  html   = document.querySelector('html');
const focoBt  = document.querySelector(' .app__card-button--foco');//pega a classe app__card-button--foco
const curtoBt = document.querySelector('.app__card-button--curto');//pega a classe app__card-button--curto
const longoBt = document.querySelector('.app__card-button--longo'); //pega a classe app__card-button--longo
const banner  = document.querySelector('.another-image') ; //pega a classe another-image
const titulo  = document.querySelector('.app__title'); //pega o titulo da página que tem a classe app__title
const botoes  = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause')


const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio ('/sons/luna-rise-part-one.mp3');
let intervaloId = null
let tempoDecorridoEmSegundos = 5
musica.loop = true


musicaFocoInput.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})


  focoBt.addEventListener('click', () => {
  
    alterarContexto('foco')
    focoBt.classList.add('active')
}) 

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto')
  curtoBt.classList.add('active')
})
longoBt.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
}) 

function alterarContexto (contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
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
    tempoDecorridoEmSegundos--;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
    document.getElementById('temporizador').textContent = tempoDecorridoEmSegundos;
    clearInterval(intervaloId);
    intervaloId = setInterval(contagemRegressiva, 1000);
};

startPauseBt.addEventListener('click', () => {
    clearInterval(intervaloId);
    intervaloId = setInterval(contagemRegressiva, 1000);
});
