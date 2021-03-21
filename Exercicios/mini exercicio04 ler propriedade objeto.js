const filme = {
    titulo: 'Vingadores',
    ano: 2019,
    diretor: 'Gleydiston Barreto',
    personagem: 'Gleydiston'
}
exibirPropiedades(filme);
function exibirPropiedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop]);
        }
    }
}