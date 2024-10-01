const prompt = require(`prompt-sync`)()

const altura = parseFloat(prompt(`Qual sua altura?`))

const peso = parseFloat(prompt(`Qual seu peso?`))

const IMC = peso / (altura ** 2)

if(IMC >= 40){
    console.log(`Voce tem obesidade extrema!`)
}
else if(IMC >= 35){
    console.log(`Voce tem obesidade de grau 2!`)
}
else if(IMC >=30){
    console.log(`Voce tem obesidade de grau 1!`)
}
else if(IMC >=25){
    console.log(`Voce esta acima do peso!`)
}
else if(IMC >=18){
    console.log(`Voce esta no peso adequado!`)
}
else if(IMC <=17){
    console.log(`Voce esta abaixo do peso!`)
}
