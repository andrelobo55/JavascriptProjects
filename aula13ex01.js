var i = 0

/**
 * Laço de repetição while.
 * Enquanto i for menor que 8
 * Chama função 'mostrar'
 * Função 'mostrar' recebe i como argumento e mostra seu valor + 1
 * i = i + 1
 */

while(i < 8) {
    // console.log(i+1)
    mostrar(i)
    i++
}

function mostrar(i) {
    console.log(`Passo: ${i+1}`)
}