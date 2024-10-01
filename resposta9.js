const prompt = require(`prompt-sync`)()

const nota = parseInt(prompt(`Qual foi a nota?`))

if(nota >=80){
    console.log(`Primeiro Lugar`)
}
else if(nota >=50){
    console.log(`Segundo Lugar`)
}
else if(nota <=49){
    console.log(`Terceiro Lugar`)
}
