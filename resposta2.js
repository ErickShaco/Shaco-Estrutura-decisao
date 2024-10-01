const prompt = require(`prompt-sync`)()

// Criando prompt para ser digitado a idade desejada

const idade = parseInt(prompt(`Digite a Idade: `))

// Usando if , else if para determinar as faixas etarias

if(idade <= 13 ){
    console.log(`Criança!`)
} 
else if(idade <=17){
    console.log(`Adolescente!`)
} 
else if (idade >= 18){
    console.log(`Adulto`)
}


   
