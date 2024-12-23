//Criar refêrencia  ao form  aos elementos  de resposta (pelo seu id)
const frm=document.querySelector("form")
const resp1=document.querySelector("#outResp1")
const resp2=document.querySelector("#outResp2")
const resp3=document.querySelector("#outResp3")

//Criar um "ouvinte" de evento, acionado quando o botão submit  for clicado
frm.addEventListener("submit", (e)=> {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)
    const entrada = preco * 0.50
    const parcela = (preco * 0.50) / 12

     resp1.innerText= `Promoção : ${veiculo}`
       resp2.innerText= `Entrada de R$: ${entrada.toFixed(2)}`
         resp3.innerText= `+12 de R$ : ${parcela.toFixed(2)}`

         e.preventDefault()
});