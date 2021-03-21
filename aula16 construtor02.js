// Factory Functions(Função de Fabrica)
const celular = {
    marcaCelular: 'Asus',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log("Fazendo ligação");
    } 

    const novoObjecto Object.assign({},celular);
    console.log(novoObjecto);