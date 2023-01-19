function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var horas = 18//data.getHours()
    
    msg.innerHTML = `Agora são ${horas} horas`
    
    if(horas > 0 && horas < 12){
        msg.innerHTML = `Agora são ${horas} da manhã.`
        document.body.style.background = '#e2cd9f'
        foto.src = 'fotoManha.jpg'
    }
    else if(horas >= 12 && horas < 18) {
        msg.innerHTML = `Agora são ${horas} da tarde.`
        document.body.style.background = '#b9846f'
        foto.src = 'fotoTarde.jpg'
    }
    else {
        msg.innerHTML = `Agora são ${horas} da noite.`
        document.body.style.background = '#515154'
        foto.src = 'fotoNoite.jpg'
    }
}
