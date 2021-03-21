// Somar os multiplos de 3 e 5.

soma(10);
function soma(limite){
    let valor3 = 0;
    let valor5 = 0;
    let valorTotal = 0;
    for(i = 1; i <= limite ; i++){
        if(i % 3 === 0){
            valor3 += i;
            console.log(valor3);
        }if(i % 5 === 0){
            valor5 += i;
            console.log(valor5);
        }
    }
    valorTotal = valor3 + valor5;
        console.log(valorTotal);
    
}
