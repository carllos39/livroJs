const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

let resposta="";//String com resposta a ser exibida
let numContas=0;//Inicializa o contador
let valTotal =0;// Acumular (variável global)

frm.addEventListener("submit",(e)=>{
e.preventDefault();

const descricao =frm.descricao.value ;
const valor = Number(frm.valor.value);

numContas++;
valTotal = valTotal + valor;//ou valTotal += valor
resposta = resposta + descricao + "-R$" + valor.toFixed(2) + "\n";
resp1.innerText=`${resposta}----------------------`;
resp2.innerText=`${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`;

frm.descricao.value = "";//Limpa campos do formulário
frm.valor.value = "";
frm.descricao.focus();//Posicina no campo descricao do formulário

});