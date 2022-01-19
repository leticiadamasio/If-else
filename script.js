//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18.
let idade = 18
if (idade >= 18){
    console.log("Parabéns você é maior de idade.")
}
else {
    console.log("Desculpe, mas você ainda não é maior de idade.")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true.
let humano = true
if (idade >= 18 && humano == true) {
    console.log("Você possui todos os requisitos")
}
else {
    console.log("Você não possui todos os requisitos")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes = "Junho"
if (mes == "Janeiro" || mes == "Dezembro") {
    console.log ("Você faz aniversário em Janeiro ou Dezembro")
} 
else {
    console.log (`Você faz aniversário em ${mes}`)
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Letícia"
if( nome.substring (0,1) == "R"){ 
   console.log ("Seu nome começa com R")
} 
else{
console.log (`Seu nome começa com ${nome.substring(0,1)}`)
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let sobrenome = "Damasio"
if ( nome.substring (0,1) == "E" || sobrenome.length > 6){
    console.log ("Você cumpre ao menos 1 ou todos os requisitos")
} 
else {
    console.log ("Desculpe, mas você não cumpre nenhum requisito")
}