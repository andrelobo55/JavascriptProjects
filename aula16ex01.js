function verificar(numero) { // função que verifica se o número é par ou ímpar
    if(numero % 2 == 0) { // se o resto da divisão por 2 for igual a 0
        return 'par' // retorne par
    }
    else { // senão
        return 'ímpar' // retorne ímpar
    }
}

let resultado = verificar(4) // resultado recebe a função verificar passando o 4 como parâmetro
console.log(`O número é ${resultado}.`) // mostra no terminal o resultado