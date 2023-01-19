let vetor = [5,7,2] // Cria um vetor com os elementos: 5, 7, 2
let i
console.log(`Vetor antes de ser ordenado: ${vetor}`)
vetor.sort() // ordena o vetor utilizando o método sort
console.log(`Vetor ordenado: ${vetor}`) // mostra os elementos do vetor
console.log(`Tamanho: ${vetor.length}`) // mostra o tamanho do vetor
vetor[3] = 10 // cria um espaço no vetor para receber o elemento 10
vetor.push(20) // faz a mesma coisa que a linha acima adicionando o elemento 20
console.log(`Vetor com novos elementos: ${vetor}`) // mostra os elementos do vetor
console.log(`Tamanho: ${vetor.length}`) // mostra o tamanho do vetor utilizando o atributo length
console.log(`1° elemento do vetor: ${vetor[0]}`)
console.log(`2° elemento do vetor: ${vetor[1]}`)
console.log(`5° elemento do vetor ${vetor[4]}`)

// Utilizando o for para mostrar os elementos dos vetores:
for(i = 0; i < vetor.length; i++) {
    console.log(`posição no vetor: ${i} | valor: ${vetor[i]}`)
}

// Forma simplificada de utilizar o for
for(i in vetor) { // Para cada i no vetor mostre na tela:
    console.log(`vetor[${i}] = ${vetor[i]}`)
}

let pos = vetor.indexOf(10)
console.log(`Posição do elemento 10: vetor[${pos}]`)
