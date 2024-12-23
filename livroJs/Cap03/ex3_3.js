const prompt= require("prompt-sync")()
const salario=Number(prompt("Informar o salário mensal :"))
const tempo=Number(prompt("Informar o tempo de casa :"))
const quadrienio = Math.floor(tempo / 4)
const porcetagem=quadrienio / 100
const anuenio= salario * porcetagem
const total= salario + anuenio
console.log(`Quadrienio : ${quadrienio}`)
console.log(`Salário : ${total.toFixed(2)}`)