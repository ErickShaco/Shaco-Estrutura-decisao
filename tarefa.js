/* Crie um algoritmo que solicite um numero e informe se o numero é PAR ou IMPAR*/

const prompt = require(`prompt-sync`)()

const numero = prompt(`Digite o Numero: `)

if (numero % 2 == 0) {
    console.log(`O ${numero} é um numero PAR `)
}
else {
    console.log(`O ${numero} é um numero IMPAR `)
}

