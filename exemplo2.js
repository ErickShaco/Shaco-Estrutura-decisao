const prompt = require(`prompt-sync`)()

const nota = parseFloat(prompt(`Informe sua nota: `))

if(nota >= 60 ) {
    console.log(`Voce Foi Aprovado`)
}
else if(nota >= 30) {
    console.log(`Voce esta de recuperação`)
}
else{
    console.log(`Voce foi Reprovado`)

}
