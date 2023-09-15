/**
 * Crie uma função que pegue um caractere e o verifica contra a instrução do switch para reproduzir o som correto, e então vamos chamá-la dentro do ouvinte de evento para pressionamento da tecla, bem como o ouvinte de eventos para nossos botões da bateria.
 */
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickAlert);
}

function clickAlert () {
    // var som = new Audio("./sounds/tom-1.mp3");
    // som.play();
    var buttonInnerHtml = this.innerHTML;
    
    teclaSom(buttonInnerHtml);

    animarBotao(buttonInnerHtml);

    switch(buttonInnerHtml) {
        case 'w':
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;

        case 'a':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case 's':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case 'd':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'k':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case 'l':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        default:
    }
}

/**
 * Para todo o documento HTML é adicionado um EventListener para receber o teclado que o usuário digitar. Assim que a tecla é pressionada, a função anônima com parâmetro event para ler teclas (keydown) é acionada. Nela o switch case recebe o event.key que é a tecla pressionada.
 */

// adiciona um Event Listener para a função teclaSom, na qual recebe como parâmetro a tecla pressionada pelo usuário.
document.addEventListener("keydown", function (event){
    teclaSom(event.key);

    animarBotao(event.key);
});

// A função teclaSom recebe como parâmetro a tecla pressionada pelo usuário e verifica se a mesma coincide com os componentes da bateria. Se sim, a tecla pressioanda irá fazer o mesmo som do componente.
function teclaSom (key) {
    switch (key) {
        case 'w':
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;

        case 'a':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case 's':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case 'd':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'k':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case 'l':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        default:
            break;
    }
}

function animarBotao (teclaAtual) {
    var ativarBotao = document.querySelector("." + teclaAtual);
    ativarBotao.classList.add("pressed");
    setTimeout(function () {
        ativarBotao.classList.remove("pressed");
    }, 100)
}
