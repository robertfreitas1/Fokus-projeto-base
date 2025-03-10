const  html = document.querySelector('html');
const focoBt = document.querySelector(' .app__card-button--foco');//pega a classe app__card-button--foco
const curtoBt = document.querySelector('.app__card-button--curto');//pega a classe app__card-button--curto
const longoBt = document.querySelector('.app__card-button--longo'); //pega a classe app__card-button--longo
const banner = document.querySelector('.another-image') ; //pega a classe another-image
const titulo  = document.querySelector('.app__title'); //pega o titulo da página que tem a classe app__title


  focoBt.addEventListener('click', () => {
  
    alterarContexto('foco')
}) 

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
}) 

function alterarContexto (contexto){
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