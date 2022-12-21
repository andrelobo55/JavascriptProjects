var agora = new Date()  /*  agora recebe um construtor de tipo data */
var hora = agora.getHours() /*  hora recebe uma função de agora que pega às horas do sistema */

/*  Madrugada */
if(hora >= 0 && hora <= 5.59){
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log("Boa madrugada!")
}
/*  Dia */
else if(hora >= 6 && hora <= 11.59){
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log("Bom dia!")
}
/*  Tarde */
else if(hora >= 12 && hora <= 17.59){
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log("Boa tarde!")
}
/*  Noite */
else if(hora > 18){
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log("Boa noite!")
}
/*  Não existe */
else{
    console.log("Não existe horário negativo.")
}