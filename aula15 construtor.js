const celular ={
    marcaCelular: 'Asus',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
},
capacidadeBateria : 5000,
    ligar : function(){
        console.log("Fazendo ligação");
    },  
    function : Celular(marcaCelular,tamanhoTela,capacidadeBateria){
        this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function(){
            console.log('Fazendo ligação...');
        }
    }   
    const celular = new Celular('asus',5.5,5000);
    console.log(Celular);