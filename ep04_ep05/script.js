function contar() {
    var inicio = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('res')

    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Faltam dados!')
    }
    else {
        res.innerHTML = "Contando..."
        let i = Number(inicio.value), f = Number(fim.value), p = Number(passo.value)
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}