let Pessoa = { // Objeto pessoa
    nome: 'André', // atributo nome do objeto pessoa
    sexo: 'M', 
    peso: 85.4,
    engordar(p = 0) { // função engordar do objeto pessoa
        this.peso += p
    }
}
Pessoa.engordar(2) // passa o argumento 2 para a função engordar de pessoa
console.log(`${Pessoa.nome} engordou ${Pessoa.peso}kg.`) // mostra na tela