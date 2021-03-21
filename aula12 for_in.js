const pessoa = {
    nome: 'Gleydiston Barreto',
    idade: 27
};

for(let chave in pessoa){
    console.log(chave,pessoa[chave]);
}

const cores = ['Vermelho','azul','branco'];

for(let indice in cores){
    console.log(indice,cores[indice]);
}
