const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

frm.addEventListener("submit",(e)=>{
e.preventDefault();

const pessoa =Number(frm.pessoa.value );
const peixe =Number(frm.peixe.value );

let pagar;
if(peixe <= pessoa){
pagar = pessoa * 20;
}else{
pagar = pessoa * 20 + ((peixe - pessoa) * 12);    
}
resp1.innerText=`Número de pessoas:${pessoa}`;
resp2.innerText=`Número de peixes:${peixe}`;
resp3.innerText=`Total a pagar:${pagar.toFixed(2)}`;
});