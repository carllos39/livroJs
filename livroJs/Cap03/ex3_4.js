const prompt=require("prompt-sync")()
const pesoKg=Number(prompt("Informar quantidade em kg :"))
const consumo=Number(prompt("Informar o consumo diário :"))
const pesoGr=pesoKg * 1000
const duracao= Math.floor(pesoGr / consumo)
const sobra= pesoGr % consumo
console.log(`Duração : ${duracao} dias`)
console.log(`Sobra : ${sobra} gramas`)