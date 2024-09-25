const prompt = require(`prompt-sync`)()

const idade = parseInt(prompt(`Informe a sua idade`))

const ehMaiordeIdade = idade >= 18
const naoehMaiordeIdade = !ehMaiordeIdade

if (naoehMaiordeIdade) {
    console.log(`é Menor de Idade`)
} 
else {
    console.log(`é maior de idade`)
}

// operadores relacionais
// MAIOR QUE ( > )
// MENOR QUE ( < )
// MAIOR OU IGUAL A ( >= )
// MENOR OU IGUAL A ( <= )
// IGUAL A ( == )
// DIFERENTE DE ( != )
