exibirTipo(10)

function exibirTipo(limite){
    for (let index = 0; index <= limite; index++) {
        if (index % 2 === 0) {
            console.log(`${index}=> Par`)    
        } else {
            console.log(`${index}=> Impar`)
        }
        
    }
}