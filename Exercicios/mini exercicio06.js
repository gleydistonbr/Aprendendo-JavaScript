const array = [100,90,70,60];
console.log(mediaAluno(array));

function mediaAluno(notas){
   const media = calcularMedia(notas);
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A';      

    function calcularMedia(array){
        let soma = 0;
        for(let valor of array){
            soma += valor;
        }
        const media = soma/(array.length); 
    }
}
