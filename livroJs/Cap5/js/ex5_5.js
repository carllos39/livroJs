const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

let resposta="";
let numContas=0;
let valTotal =0;
frm.addEventListener("submit",(e)=>{
e.preventDefault();

const descricao = frm.descricao.value ;
const valor =Number(frm.valor.value);
numContas++;
valTotal +=valor;
resposta =resposta + descricao + "-R$"+ valor.toFixed(2)+ "\n";

resp1.innerText=`${resposta}------------------------------------`;
resp2.innerText=`${numContas} Conta(s) - Total R$ ${valTotal.toFixed(2)}`;

frm.descricao.value ="";
frm.valor.value = "";
frm.descricao.focus();
});
