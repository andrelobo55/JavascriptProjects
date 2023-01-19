function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoUsuario = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(anoUsuario.value.lenght == 0 || Number(anoUsuario.value) > ano){
        window.alert('[ERRO!] Verifique os dados novamente.')
    }
    else {
        var generoUsuario = document.getElementsByName('radsex')
        var idade = ano - Number(anoUsuario.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(generoUsuario[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 13){
                // criança
                img.setAttribute('src', 'criancaH.jpg')
            }
            else if(idade < 27) {
                // jovem
                img.setAttribute('src', 'jovemH.jpg')
            }
            else if(idade < 60) {
                // adulto
                img.setAttribute('src', 'idoso.jpg')
            }
            else { 
                //idoso
            }
        }
        else{
            genero = "Mulher"
            if(idade >= 0 && idade < 13){
                // criança
                img.setAttribute('src', 'criancaM.jpg')
            }
            else if(idade < 27) {
                // jovem
                img.setAttribute('src', 'jovemM.jpg')
            }
            else if(idade < 60) {
                // adulto
                img.setAttribute('src', 'adultaM.jpg')
            }
            else { 
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }   
        }

        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}