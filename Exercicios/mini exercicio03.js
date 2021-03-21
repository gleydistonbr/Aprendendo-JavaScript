//Como saber se um número é par ou impar.
valorEntrada(5);
function valorEntrada(limite){
    for(let i = 0; i <= limite ; i++){
        if(i % 2 === 0){
          console.log(i,':Par');
        }else{
            console.log(i,':Impar');
        }
    }
  
}