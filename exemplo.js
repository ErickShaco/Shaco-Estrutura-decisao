const prompt = require('prompt-sync')()

//Informando idade

let Nota = prompt(`Qual foi sua nota?`)

if (Nota >= 70 ) {
    console.log(`voce foi aprovado`)
} 

else if (Nota >= 30) {
    console.log(`Voce esta na recuperação`)
}

else {
    console.log(`Voce foi reprovado`)
}




