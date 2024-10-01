const prompt = require(`prompt-sync`)()

const pontos = parseInt(prompt(`Qual foi sua pontuação?`))

if(pontos >= 6000){
    console.log(`Voce Desempenhou Acima da media nessa partida!`)
}
else if(pontos >= 4000){
    console.log(`Voce Desempenhou na Media nessa partida!`)
}
else if(pontos <= 3999){
    console.log(`Voce Desempenhou Abaixo da media nessa partida!`)
}

