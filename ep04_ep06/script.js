// Função que gera a tabuada de um número digitado pelo usuário
function gerar() {
    let idNum = document.getElementById('idCaixaNum') // cria uma variável para receber o texto do usuário
    let idTabuada = document.getElementById('idTabuada') // variável recebe o texto da tabuada

    if(idNum.value.length == 0) { // Se a caixa de número estiver em branco
        window.alert('[ERRO!] - Espaço em branco!') // retorna mensagem de erro
    }
    else { // Senão,
        let i, res
        let num = Number(idNum.value) // variável num recebe o valor númerico de idNum

        for(i = 0; i <= 10; i++) { // enquanto i for menor ou igual a 10, faça i++
            let item = document.createElement('option') // cria um elemento option para a variável item
            res = num * i // resultado recebe o número vezes i
            item.text = `${num} x ${i} = ${res}` // variável item recebe os valores
            idTabuada.appendChild(item) // item é mostrada abaixo da tabuada
        }
    }
}