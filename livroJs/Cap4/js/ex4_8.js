const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
const valor = Number(frm.valor.value );
const aux = Math.floor(valor / 20);
const parcelas = aux == 0 ? 1 :aux > 6 ? 6:aux;//Operador ternário
const valorParcelas =valor / parcelas;

resp1.innerText=`Pode parar em: ${parcelas}x de R$ ${valorParcelas.toFixed(2)} `;
});