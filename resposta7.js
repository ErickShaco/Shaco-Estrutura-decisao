const prompt = require(`prompt-sync`)()

let nota = parseInt(prompt(`Qual foi sua nota no primeiro bimestre?: `))
let nota2 = parseInt(prompt(`Qual foi sua nota no segundo bimestre?: `))
let nota3 = parseInt(prompt(`Qual foi sua nota no terceiro bimestre?: `))
let nota4 = parseInt(prompt(`Qual foi sua nota no quarto bimestre?: `))

let media = (nota + nota2 + nota3 + nota4) / 4

if(media >=7){
    console.log(`Voce foi Aprovado :D`)
}
else if(media >= 5){
    console.log(`Voce esta na Recuperaçao :/`)
}
else if(media <=4 ){
    console.log(`Voce foi Reprovado :C`)
}