const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPromocao")

frm.addEventListener("submit" , (e) =>{
const medicamento = frm.medicamento.value
const preco = Number( frm.preco.value)
const promocao = Math.floor(preco * 2)

resp1.innerText = `Promoção de : R$ ${medicamento}`
resp2.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`

e.preventDefault()
});