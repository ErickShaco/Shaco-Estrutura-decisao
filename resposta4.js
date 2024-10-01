const prompt = require(`prompt-sync`)()

const Temperatura = parseInt(prompt(`Qual é a Temperatura de Hoje? `))

// Usando if , else if para determinar se esta frio, Agradvel ou quente

if(Temperatura <= 20){
    console.log(`Esta Frio`)
}
else if(Temperatura >= 21){
    console.log(`O clima esta agradavel`)
}
else if(Temperatura >= 30){
    console.log(`O clima esta quente`)
}