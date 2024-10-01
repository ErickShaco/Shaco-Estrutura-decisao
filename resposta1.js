const prompt = require(`prompt-sync`)()
// Criando constante para determinar PAR ou IMPAR

const numero = prompt(`Digite o Numero: `)

// Determinando se é par ou impar usando if e else

if (numero % 2 == 0) {
    console.log(`O ${numero} é PAR `)
}
else {
    console.log(`O ${numero} é IMPAR `)
}
