let backgroundImg = 1, fullBackground = false, margin = 0, marginBottom = 7, i = 0, interval, bolean = false, key;
const character = document.querySelector('.characterDiv')

if(localStorage.getItem("last") == 'true'){
    margin = 80
    marginBottom = 18.6
    backgroundImg = 2
    walkCharacter()
    screenMode()
    historyy()
    localStorage.setItem("last", false)
}

function screenMode() {
    if (window.innerHeight === screen.height) {
        if(backgroundImg == 2){
            document.body.style.backgroundImage = "url(Img/background2.jpg)"
        } else {
            document.body.style.backgroundImage = "url(Img/background1.jpg)"
        }
    } else {
        if(backgroundImg == 2){
            document.body.style.backgroundImage = "url(Img/smallBackGround2.jpg)"
        } else {
            document.body.style.backgroundImage = "url(Img/smallBackGround1.jpg)"
        }
    }
}

function moveFoward(up) {
    character.classList.add('walk')

    if(up == true){

    setTimeout(function(){
        marginBottom += 0.15
        margin += 0.5
        walkCharacter()

    }, 50)
    setTimeout(function(){
        marginBottom += 0.15
        margin += 0.5
        walkCharacter()

    }, 100)
    setTimeout(function(){
        marginBottom += 0.15
        margin += 0.5
        walkCharacter()

    }, 150)
    setTimeout(function(){
      marginBottom += 0.15
      margin += 0.5
      walkCharacter()
      historyy()

    }, 200)
    setTimeout(function(){
      bolean = false
    }, 210)
    } else {

        setTimeout(function(){
            margin += 0.5
            walkCharacter()

        }, 50)
        setTimeout(function(){
            margin += 0.5
            walkCharacter()

        }, 100)
        setTimeout(function(){
            margin += 0.5
            walkCharacter()

        }, 150)
        setTimeout(function(){
        margin += 0.5
        walkCharacter()
        historyy()

        }, 200)
        setTimeout(function(){
        bolean = false
        }, 210)
    }
}

function moveBackward(up) {

    character.classList.add('walkBack')

    if(up == true){

    setTimeout(function(){
        marginBottom -= 0.15
        margin -= 0.5
        walkCharacter()

    }, 50)
    setTimeout(function(){
        marginBottom -= 0.15
        margin -= 0.5
        walkCharacter()

    }, 100)
    setTimeout(function(){
        marginBottom -= 0.15
        margin -= 0.5
        walkCharacter()

    }, 150)
    setTimeout(function(){
      marginBottom -= 0.15
      margin -= 0.5
      walkCharacter()
      historyy()

    }, 200)
    setTimeout(function(){
      bolean = false
    }, 210)
    } else {

        setTimeout(function(){
            margin -= 0.5
            walkCharacter()

        }, 50)
        setTimeout(function(){
            margin -= 0.5
            walkCharacter()

        }, 100)
        setTimeout(function(){
            margin -= 0.5
            walkCharacter()

        }, 150)
        setTimeout(function(){
        margin -= 0.5
        walkCharacter()
        historyy()

        }, 200)
        setTimeout(function(){
        bolean = false
        }, 210)
    }
}

function chatBox (string, string2) {
    document.getElementById("textDiv").innerHTML += `<div class="window" tabindex="0" id="window">
    <div class="window__title-bar">
      <div class="window__title">
        ${string}
      </div>
      <button class="window__btn">
          &times;
        </button>
    </div>
  
    <div class="window__body">
      <h1 class="boxText" style="font-size: 2em;">${string2}</h1>
      <p class="boxText" id="text1" style="font-size: 1.5em;">

      </p>
    </div>
    
    <div class="window__status-bar">
       Nala Leite
    </div>
  </div>`
}

function walkCharacter() {
    document.getElementById("characterImg").style.left = `${margin}%`
    document.getElementById("characterImg").style.bottom = `${marginBottom}vh`
}

function intervalo(string){
    character.classList.add('talk')

    interval = setInterval(function(){
        document.getElementById('text1').innerHTML += string.charAt(i);
        i++;
    
        if(i > string.length){
            stop()
            character.classList.remove('talk')
        }
    }, 10);
}

function stop(){
    clearInterval(interval);
}

function historyy(){
    document.getElementById("textDiv").innerHTML = ` `

    stop()

    i = 0
      if(backgroundImg == 1){
              if(margin > 30 && margin < 34){
                
                function writer(){
                    let stringAboutMe = `Eu sou a Nana e hoje vou ser a vossa guia! Este é o portefólio pessoal da minha criadora,
                Nala Leite. A Nala nasceu em Fortaleza, CE, Brasil em 8 de fevereiro de 2002, agora residente
                na cidade do Porto, em Portugal.
                A sua paixão pela moda inicia-se bastante cedo com a enorme coleção de barbies da família e
                a vasta quantidade de roupas que estas tinham, criando assim um fascínio pela identidade
                visual de cada um e estimulando a criatividade a partir de pequenas criações para as bonecas e
                desenhos para as mesmas. Esta paixão pela moda, levou a pequena Nala a futuramente
                escolher entrar na licenciatura de Design de Moda, na Universidade da Beira Interior, na
                Covilhã, no interior de Portugal.
                A moda na perspetiva da minha criadora é a chave para a libertação do comum, do aborrecido
                e pouco criativo leque de escolhas de roupa aprovadas pela sociedade, sociedade esta que
                parece cada vez menos colorida e divertida.`

                    intervalo(stringAboutMe)
                }

                chatBox("Sobre mim", "Olá,")
                writer()
              } else if(margin > 32 && margin < 36 || margin > 28 && margin < 32){
                character.classList.remove('talk')
              }
      } else if (backgroundImg == 2) {
        if(margin > 36 && margin < 40){
            
        } else if (margin > 78){
            let string = `A partir deste ponto, pode escolher que caminho deseja tomar e saber mais sobre a minha
            criadora, seus objetivos como Designer e os seus projetos.`

            chatBox("Projetos e Links", " ")
            intervalo(string)

            document.getElementById("window").style.left = "10vw"
            document.getElementById("window").style.top = "6vh"
            document.getElementById("textDiv").innerHTML += `<a href="objetivos.html" class="button-56" role="button" style="left: 50vw;">Objetivos</a> <a href="projetos.html" class="button-56" role="button" style="left: 70vw;top: -8vh;">Projetos</a> <a href="https://www.instagram.com/milkiifactory/" class="button-56" role="button" style="top: -2vh;left: 50vw;">Redes sociais</a> <a href="pagina.html" class="button-56" role="button" style="top: -15vh;left: 70vw;">milkii factory</a>`
        }
      }
}

document.body.addEventListener("keypress", (event) =>{
    let keyPressed = event;
    key = keyPressed.code;
    
    if(bolean === false){

        if(key == "KeyD"){
            bolean = true

            if(backgroundImg == 2 && (margin > 30 && margin < 74)){
                    moveFoward(true)
            } else {
                if(margin >= 80){
                    if(backgroundImg == 2){
                        margin = 80
                    } else {
                        document.getElementById('checkpoint').style.bottom = "15vh"
                        document.getElementById('checkpoint').style.left = "87vw"
                        margin = 4
                        backgroundImg = 2
                        screenMode()
                        walkCharacter()
                        bolean = false
                    }
    
                } else {
                    moveFoward()
                }
            }
      
        }

        if(key == "KeyA"){

            bolean = true

            if(backgroundImg == 2 && (margin > 30 && margin < 74)){
                    moveBackward(true)
            } else {
                if(margin <= 2 && backgroundImg == 2) {
                    document.getElementById('checkpoint').style.bottom = "3vh"
                    document.getElementById('checkpoint').style.left = "36vw"
                    margin = 82
                    backgroundImg = 1
                    screenMode()
                    walkCharacter()
                    bolean = false
                }

                if(margin >= 84){
                    if(backgroundImg == 2){
                        moveBackward()
                    }
    
                } else {
                    moveBackward()
                }
            }
        }
    }

})

setInterval(function(){
    if(bolean == false){
        character.classList.remove('walk')
        character.classList.remove('walkBack')
    }
}, 1000 )

let a = 1080 - screen.height
a = a * 0.0083
document.body.style.backgroundPositionY = `-${a}rem`