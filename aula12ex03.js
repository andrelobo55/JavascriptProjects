var agora = new Date() // agora  recebe um construtor de tipo Date;
var diaSem = agora.getDay() // diaSema recebe método do tipo Date que retorna um dia da semana.
var teste_diaSem = -3
/*
Dias da semana em JavaScript:
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

/* Transforma os números acima em nome dos dias da semana usando o Switch case. */
switch(diaSem){
    // caso o número seja 0 retorne Domingo;
    case 0:
        console.log("Domingo.")
        break;
    // caso o  número seja 1 retorne Segunda
    case 1:
        console.log("Segunda-feira.")
        break;
    case 2:
        console.log("Terça-feira.")
        break;
    case 3:
        console.log("Quarta-feira.")
        break;
    case 4:
        console.log("Quinta-feira.")
        break;
    case 5:
        console.log("Sexta-Feira")
        break;
    case 6:
        console.log("Sábado.")
        break;
    // caso não ocorra nenhuma das situações acima retorne mensagem de ERRO.
    default:
        console.log("[ERRO] - Valor inválido!")
}
