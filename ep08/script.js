let num = document.getElementById('idNum')
let lista = document.getElementById('idSel')
let res = document.getElementById('idRes')
let vetor = []

function verificaNum(num) {
    if(Number(num) > 0 && Number(num) <= 100) {
        return true
    }
    else { 
        return false
    }
}

function verificaLista(num, vetor) {
    if(vetor.indexOf(Number(num)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {

    if(verificaNum(num.value) && !verificaLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Valor inválido ou já está na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(vetor.length == 0) {
        window.alert('Lista vazia!')
    }
    else {
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for(let i = 0; i < vetor.length; i++) {
            soma += vetor[i]
            if(vetor[i] > maior) {
                maior = vetor[i]
            }
            if(vetor[i] < menor) {
                menor = vetor[i]
            }
        }
        media += soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Elementos: ${total}.</p>`
        res.innerHTML += `<p>Maior valor: ${maior}.</p>`
        res.innerHTML += `<p>Menor valor: ${menor}.</p>`
        res.innerHTML += `<p>Soma: ${soma}.</p>`
        res.innerHTML += `<p>Média: ${media}.</p>`
    }
}