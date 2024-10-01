const prompt = require(`prompt-sync`)()

let peso = parseFloat(prompt(`Qual é seu peso?:`))

let altura = parseFloat(prompt(`Qual é sua altura?:`))

const IMC = peso / (altura ** 2)

if(IMC >= 18){
    console.log(`Voce esta no peso adequado`)
}
else if(IMC >=25){
    console.log(`v`
}
