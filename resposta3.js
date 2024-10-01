const prompt = require(`prompt-sync`)()

const Notas = parseInt(prompt(`Qual foi sua nota?: `))

if(Notas >= 6){
    console.log(`conceito A`)
}
else if(Notas >= 4){
    console.log(`Conceito B`)
} 
else if(Notas <= 3){
    console.log(`Reprovado`)
}