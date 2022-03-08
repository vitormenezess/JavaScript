const array = [70,70,80]

console.log(mediaAluno(array))

function mediaAluno(notas) {
    let media = 0
    for (const iterator of notas) {
        media += iterator
        
    }
    return media / notas.length

    
}