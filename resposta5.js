const prompt = require(`prompt-sync`)()

const salario = parseInt(prompt(`Qual foi o salario? `))

if(salario >= 2000){
    console.log(`Voce recebeu um salario alto!`)
}
else if(salario >= 1400){
    console.log(`Voce recebeu um salario medio!`)
}
else if(salario <= 1399){
    console.log(`Voce recebeu um salario baixo!`)
}